import { Unit } from "../schemas/unitSchema.js";

/** Returns true if the class c is not allowed given the student's preferences */
function isClassDisallowed(disallowedDayHours, c, duration) {
  for (let t of disallowedDayHours) {
    if (t[0] != c.day) continue; // not on the same day
    if (t[1] < c.time) continue; // time before class starts

    // time after class starts + before class ends
    if (t[1] < c.time + duration * 100) {
      return true;
    }
  }
  return false;
}

async function getOffering(unitcode, year, semester) {
  const unit = await Unit.findOne(
    {
      code: unitcode,
      "offerings.year": year,
      "offerings.semester": semester,
    },
    { code: 1, "offerings.classTypes": 1 }, // only return class types
  ).lean();
  if (!unit.offerings) return null;
  const offering = unit.offerings[0];
  offering.unitcode = unitcode;
  return offering;
}

/**
 * disallowedTimes: map containing key = "DAY-hr", where
 *   - DAY = "MON", "TUE", "WED", ...
 *   - hr = 8,9,10,...,21
 * unitcodes: array of unitcodes
 */
async function getOfferingsFiltered(
  disallowedTimes,
  unitcodes,
  year,
  semester,
) {
  let dayHours = Object.keys(disallowedTimes);
  // resultant format: [["MON",800], ["MON",900]]
  let disallowedDayHours = dayHours
    .filter((k) => disallowedTimes[k]) // if dayHours[k] is true, NOT allowed to have class then
    .map((str) => {
      let [d, t] = str.split("-");
      t = parseInt(t) * 100;
      return [d, t];
    });

  let offerings = [];
  for (const unitcode of unitcodes) {
    const offering = await getOffering(unitcode, year, semester);
    offering.classTypes.forEach((ct) => {
      ct.classes = ct.classes.filter(
        (c) => !isClassDisallowed(disallowedDayHours, c, ct.duration),
      );
    });
    offerings.push(offering);
  }

  return offerings;
}
export { getOfferingsFiltered, getOffering };
