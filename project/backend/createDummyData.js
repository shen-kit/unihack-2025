import mongoose from "mongoose";
import connectDB from "./database/db.js";
import dotenv from "dotenv";

import { Class } from "./schemas/classSchema.js";
import { Offering } from "./schemas/offeringSchema.js";
import { ClassType } from "./schemas/classTypeSchema.js";
import { Unit } from "./schemas/unitSchema.js";
import { Student } from "./schemas/studentSchema.js";
import { SemesterEnrolment } from "./schemas/semesterEnrolmentSchema.js";
import { UnitEnrolment } from "./schemas/unitEnrolmentSchema.js";

dotenv.config();
connectDB();

// unitcodes (FIT...):
// - FIT3171
//   - workshop: 1-3
//   - applied: 4-13
// - FIT2004
//   - workshop: 1-2
//   - applied:
// - FIT2099
//   - workshop:
//   - applied:
// - FIT2100
//   - workshop:
//   - applied:
// - FIT3134
//   - workshop:
//   - applied:
// - FIT3077
//   - workshop:
//   - applied:
const dummyUnits = [
  {
    code: "FIT3171",
    name: "Introduction to Databases",
    offerings: [
      {
        unitcode: "FIT3171",
        year: 2025,
        semester: 1,
        campus: "clayton",
        classTypes: [
          {
            name: "workshop",
            duration: 2,
            capacity: 200,
            tutor_count: 4,
            classes: [
              {
                class_id: 3171202511,
                building: "Woodside",
                room: "LG02",
                day: "TUE",
                time: 1400,
                weeks: "111111111111",
                attend_type: "hybrid",
              },
              {
                class_id: 3171202512,
                building: "Woodside",
                room: "LG02",
                day: "WED",
                time: 1800,
                weeks: "111111111111",
                attend_type: "hybrid",
              },
              {
                class_id: 3171202513,
                building: "Woodside",
                room: "LG02",
                day: "FRI",
                time: 1200,
                weeks: "111111111111",
                attend_type: "hybrid",
              },
            ],
          },
          {
            name: "applied",
            duration: 2,
            capacity: 60,
            tutor_count: 3,
            classes: [
              {
                class_id: 3171202514,
                building: "LTB",
                room: "1.27",
                day: "MON",
                time: 800,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 3171202515,
                building: "LTB",
                room: "1.26",
                day: "TUE",
                time: 1000,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 3171202516,
                building: "LTB",
                room: "1.27",
                day: "TUE",
                time: 1200,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 3171202517,
                building: "LTB",
                room: "1.35",
                day: "FRI",
                time: 1000,
                weeks: "111111111111",
                attend_type: "in-person",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: "FIT2004",
    name: "Algorithms and Data Structures",
    offerings: [
      {
        unitcode: "FIT2004",
        year: 2025,
        semester: 1,
        campus: "clayton",
        classTypes: [
          {
            name: "workshop",
            duration: 2,
            capacity: 200,
            tutor_count: 4,
            classes: [
              {
                class_id: 2004202511,
                building: "Woodside",
                room: "LG02",
                day: "MON",
                time: 1000,
                weeks: "111111111111",
                attend_type: "hybrid",
              },
              {
                class_id: 2004202512,
                building: "LTB",
                room: "G81",
                day: "FRI",
                time: 800,
                weeks: "111111111111",
                attend_type: "hybrid",
              },
            ],
          },
          {
            name: "applied",
            duration: 3,
            capacity: 60,
            tutor_count: 3,
            classes: [
              {
                class_id: 2004202513,
                building: "LTB",
                room: "1.01",
                day: "MON",
                time: 1000,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 2004202514,
                building: "LTB",
                room: "1.08",
                day: "TUE",
                time: 1400,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 2004202515,
                building: "Woodside",
                room: "1.04",
                day: "WED",
                time: 1400,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 2004202516,
                building: "Woodside",
                room: "1.04",
                day: "WED",
                time: 1800,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 2004202517,
                building: "Woodside",
                room: "2.07",
                day: "THU",
                time: 800,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 2004202518,
                building: "Woodside",
                room: "1.04",
                day: "THU",
                time: 1200,
                weeks: "111111111111",
                attend_type: "in-person",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: "FIT2099",
    name: "Object-Oriented Programming",
    offerings: [
      {
        unitcode: "FIT2099",
        year: 2025,
        semester: 1,
        campus: "clayton",
        classTypes: [
          {
            name: "lab",
            duration: 2,
            capacity: 30,
            tutor_count: 1,
            classes: [
              {
                class_id: 2099202511,
                building: "Learning Village",
                room: "G08",
                day: "MON",
                time: 900,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 2099202512,
                building: "Learning Village",
                room: "G09",
                day: "TUE",
                time: 1100,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 2099202513,
                building: "Learning Village",
                room: "G08",
                day: "MON",
                time: 1600,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 2099202514,
                building: "Learning Village",
                room: "G11",
                day: "WED",
                time: 900,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 2099202515,
                building: "Learning Village",
                room: "1.05",
                day: "WED",
                time: 1800,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 2099202516,
                building: "Learning Village",
                room: "G08",
                day: "FRI",
                time: 900,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 2099202517,
                building: "Learning Village",
                room: "G06",
                day: "FRI",
                time: 1400,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 2099202518,
                building: "Learning Village",
                room: "G08",
                day: "FRI",
                time: 1700,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: "FIT2100",
    name: "Operating Systems",
    offerings: [
      {
        unitcode: "FIT2100",
        year: 2025,
        semester: 1,
        campus: "clayton",
        classTypes: [
          {
            name: "tutorial",
            duration: 1,
            capacity: 120,
            tutor_count: 3,
            classes: [
              {
                class_id: 2100202511,
                building: "Woodside",
                room: "3.01",
                day: "TUE",
                time: 1100,
                weeks: "111111111111",
                attend_type: "online-realtime",
              },
              {
                class_id: 2100202512,
                building: "Woodside",
                room: "3.04",
                day: "THU",
                time: 1500,
                weeks: "111111111111",
                attend_type: "online",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: "FIT3134",
    name: "Computer Networks",
    offerings: [
      {
        unitcode: "FIT3134",
        year: 2025,
        semester: 1,
        campus: "clayton",
        classTypes: [
          {
            name: "lecture",
            duration: 2,
            capacity: 80,
            tutor_count: 4,
            classes: [
              {
                class_id: 3134202511,
                building: "LTB",
                room: "G81",
                day: "THU",
                time: 1300,
                weeks: "101010101010",
                attend_type: "online-realtime",
              },
            ],
          },
          {
            name: "lab",
            duration: 2.5,
            capacity: 20,
            tutor_count: 1,
            classes: [
              {
                class_id: 3134202512,
                building: "LTB",
                room: "2.01",
                day: "TUE",
                time: 1500,
                weeks: "010101010101",
                attend_type: "in-person",
              },
              {
                class_id: 3134202513,
                building: "LTB",
                room: "2.01",
                day: "THU",
                time: 1500,
                weeks: "010101010101",
                attend_type: "in-person",
              },
              {
                class_id: 3134202514,
                building: "Woodside",
                room: "2.01",
                day: "THU",
                time: 800,
                weeks: "010101010101",
                attend_type: "in-person",
              },
              {
                class_id: 3134202515,
                building: "Woodside",
                room: "2.01",
                day: "THU",
                time: 1800,
                weeks: "010101010101",
                attend_type: "in-person",
              },
              {
                class_id: 3134202516,
                building: "Woodside",
                room: "2.02",
                day: "FRI",
                time: 1200,
                weeks: "010101010101",
                attend_type: "in-person",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: "FIT3077",
    name: "Software Engineering",
    offerings: [
      {
        unitcode: "FIT3077",
        year: 2025,
        semester: 1,
        campus: "clayton",
        classTypes: [
          {
            name: "workshop",
            duration: 2,
            capacity: 150,
            tutor_count: 3,
            classes: [
              {
                class_id: 3077202511,
                building: "Learning Village",
                room: "G08",
                day: "THU",
                time: 1200,
                weeks: "111100001111",
                attend_type: "hybrid",
              },
            ],
          },
          {
            name: "lab",
            duration: 3,
            capacity: 50,
            tutor_count: 3,
            classes: [
              {
                class_id: 3077202512,
                building: "Woodside",
                room: "1.03",
                day: "MON",
                time: 1100,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 3077202513,
                building: "Woodside",
                room: "1.08",
                day: "MON",
                time: 1700,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 3077202514,
                building: "Woodside",
                room: "1.01",
                day: "WED",
                time: 1100,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 3077202515,
                building: "Woodside",
                room: "1.03",
                day: "WED",
                time: 1800,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 3077202516,
                building: "LTB",
                room: "1.03",
                day: "THU",
                time: 900,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 3077202517,
                building: "LTB",
                room: "1.38",
                day: "FRI",
                time: 1300,
                weeks: "111111111111",
                attend_type: "in-person",
              },
            ],
          },
        ],
      },
    ],
  },
];

const dummyStudents = [
  {
    fname: "John",
    lname: "Doe",
    email: "jdoe0102",
    stuid: "10000000",
    passwd: "johndoepassword",
    semesterEnrolment: [
      {
        year: 2025,
        semester: 1,
        unitEnrolment: [
          {
            unitcode: "FIT3171",
            classes: [3171202511, 3171202512],
          },
          { unitcode: "FIT2004", classes: [2004202511] },
          { unitcode: "FIT2099", classes: [] },
          { unitcode: "FIT2100", classes: [] },
        ],
      },
    ],
  },
];

// insert data
const seedDb = async () => {
  try {
    // clear existing data
    await Class.deleteMany();
    await ClassType.deleteMany();
    await Offering.deleteMany();
    await SemesterEnrolment.deleteMany();
    await Student.deleteMany();
    await UnitEnrolment.deleteMany();
    await Unit.deleteMany();

    await Unit.insertMany(dummyUnits);
    await Student.insertMany(dummyStudents);

    console.log("successfully inserted data");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting data:", err);
    mongoose.connection.close();
  }
};

seedDb();
