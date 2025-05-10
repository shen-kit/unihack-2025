/** Returns true if classes c1 and c2 clash */
function hasConflict(c1, c2) {
  return (
    c1.day == c2.day &&
    ((c2.time <= c1.time && c1.time < c2.end) ||
      (c1.time <= c2.time && c2.time < c1.end))
  );
}

/** Returns true if can allocate `selected` given `allocated` */
function isValidAllocation(allocated, selected, maxHoursPerDay) {
  function getClassDuration(c) {
    return (c.end - c.time) / 100;
  }

  // validate total hours < max hours per day
  let total_hrs =
    getClassDuration(selected) +
    Object.values(allocated)
      .filter((c) => c.day == selected.day)
      .reduce((s, e) => s + getClassDuration(e), 0);

  if (total_hrs > maxHoursPerDay) {
    return false;
  }

  for (const assignedClass of Object.values(allocated)) {
    if (hasConflict(assignedClass, selected)) {
      return false;
    }
  }
  return true;
}

/**
 * Returns a list of valid allocations if one exists, else null.
 *
 * Inputs:
 * - allocations (map classTypeId:class): default {}
 * - offerings (array): [{offering, [classes{id, start, end}]}]
 * - offerings (array):
 *   [{
 *     name,
 *     duration,
 *     classes: [ { id, day, start, end } ]
 *   }]
 */
function backtrack(allocations, classOfferings, maxHoursPerDay) {
  // valid schedule found
  if (Object.keys(allocations).length == classOfferings.length) {
    return allocations;
  }

  // get the most constrained variable (offering with fewest valid choices)
  let nextOffering = classOfferings
    .filter((co) => !allocations[co.id])
    .sort((a, b) => a.classes.length - b.classes.length)[0];

  for (let c of nextOffering.classes) {
    if (isValidAllocation(allocations, c, maxHoursPerDay)) {
      allocations[nextOffering.id] = c; // choose this class
      let result = backtrack(allocations, classOfferings, maxHoursPerDay);
      if (result) return result; // return if valid allocation
      delete allocations[nextOffering.id]; // backtrack if failed
    }
  }

  // no valid allocation exists
  return null;
}

/**
 * Input format:
 * [
 *   {
 *     code,
 *     classTypes: {
 *       name,
 *       duration,
 *       classes: [ {id, day, start}, ... ]
 *     }
 *   }
 * ]
 */
function generateTimetable(offerings, maxHoursPerDay) {
  let classOfferings = [];
  for (const o of offerings) {
    for (let ct of o.classTypes) {
      for (let c of ct.classes) {
        c.end = c.time + ct.duration * 100;
        c.unitcode = o.unitcode;
      }
      ct.id = o.unitcode + ":" + ct.name; // "FIT3171:workshop"
      classOfferings.push(ct);
    }
  }

  return backtrack({}, classOfferings, maxHoursPerDay);
}

export default generateTimetable;

// ========================================
//                TESTING!!!
// ========================================

// import { getOfferingsFiltered } from "./algorithmBackend.js";
// import connectDB from "../database/db.js";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
// connectDB();
//
// let offerings = await getOfferingsFiltered(
//   // should filter out 2 workshops
//   { "TUE-15": true, "WED-16": true, "WED-18": true },
//   ["FIT3171", "FIT2004"],
//   2025,
//   1,
// );
//
// let soln = generateTimetable(offerings, 3);
// console.log(soln);
//
// mongoose.disconnect(process.env.MONGO_URI);
