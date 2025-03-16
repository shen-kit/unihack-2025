import mongoose from "mongoose";
import connectDB from "./database/db.js";
import dotenv from "dotenv";

import { Unit } from "./schemas/unitSchema.js";
import { Student } from "./schemas/studentSchema.js";

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
                class_id: 1,
                building: "Woodside",
                room: "LG02",
                day: "TUE",
                time: 1400,
                weeks: "111111111111",
                attend_type: "hybrid",
              },
              {
                class_id: 2,
                building: "Woodside",
                room: "LG02",
                day: "WED",
                time: 1600,
                weeks: "111111111111",
                attend_type: "hybrid",
              },
              {
                class_id: 3,
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
                class_id: 4,
                building: "LTB",
                room: "1.27",
                day: "MON",
                time: 800,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 5,
                building: "LTB",
                room: "1.26",
                day: "TUE",
                time: 1000,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 6,
                building: "LTB",
                room: "1.27",
                day: "TUE",
                time: 1200,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 7,
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
      {
        year: 2025,
        semester: 2,
        campus: "clayton",
        classTypes: [
          {
            name: "workshop",
            duration: 2,
            capacity: 200,
            tutor_count: 4,
            classes: [
              {
                class_id: 1,
                building: "Woodside",
                room: "LG02",
                day: "TUE",
                time: 1400,
                weeks: "111111111111",
                attend_type: "hybrid",
              },
              {
                class_id: 2,
                building: "Woodside",
                room: "LG02",
                day: "WED",
                time: 1600,
                weeks: "111111111111",
                attend_type: "hybrid",
              },
              {
                class_id: 3,
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
                class_id: 4,
                building: "LTB",
                room: "1.27",
                day: "MON",
                time: 800,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 5,
                building: "LTB",
                room: "1.26",
                day: "TUE",
                time: 1000,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 6,
                building: "LTB",
                room: "1.27",
                day: "TUE",
                time: 1200,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 7,
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
                class_id: 1,
                building: "Woodside",
                room: "LG02",
                day: "MON",
                time: 1000,
                weeks: "111111111111",
                attend_type: "hybrid",
              },
              {
                class_id: 2,
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
                class_id: 3,
                building: "LTB",
                room: "1.01",
                day: "MON",
                time: 1000,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 4,
                building: "LTB",
                room: "1.08",
                day: "TUE",
                time: 1400,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 5,
                building: "Woodside",
                room: "1.04",
                day: "WED",
                time: 1400,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 6,
                building: "Woodside",
                room: "1.04",
                day: "WED",
                time: 1800,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 7,
                building: "Woodside",
                room: "2.07",
                day: "THU",
                time: 800,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 8,
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
      {
        year: 2025,
        semester: 2,
        campus: "clayton",
        classTypes: [
          {
            name: "workshop",
            duration: 2,
            capacity: 200,
            tutor_count: 4,
            classes: [
              {
                class_id: 1,
                building: "Woodside",
                room: "LG02",
                day: "MON",
                time: 1000,
                weeks: "111111111111",
                attend_type: "hybrid",
              },
              {
                class_id: 2,
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
                class_id: 3,
                building: "LTB",
                room: "1.01",
                day: "MON",
                time: 1000,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 4,
                building: "LTB",
                room: "1.08",
                day: "TUE",
                time: 1400,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 5,
                building: "Woodside",
                room: "1.04",
                day: "WED",
                time: 1400,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 6,
                building: "Woodside",
                room: "1.04",
                day: "WED",
                time: 1800,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 7,
                building: "Woodside",
                room: "2.07",
                day: "THU",
                time: 800,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 8,
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
                class_id: 1,
                building: "Learning Village",
                room: "G08",
                day: "MON",
                time: 900,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 2,
                building: "Learning Village",
                room: "G09",
                day: "MON",
                time: 1100,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 3,
                building: "Learning Village",
                room: "G08",
                day: "MON",
                time: 1600,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 4,
                building: "Learning Village",
                room: "G11",
                day: "WED",
                time: 900,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 5,
                building: "Learning Village",
                room: "1.05",
                day: "WED",
                time: 1800,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 6,
                building: "Learning Village",
                room: "G08",
                day: "FRI",
                time: 900,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 7,
                building: "Learning Village",
                room: "G06",
                day: "FRI",
                time: 1400,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 8,
                building: "Learning Village",
                room: "G08",
                day: "FRI",
                time: 1500,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
            ],
          },
        ],
      },
      {
        year: 2025,
        semester: 2,
        campus: "clayton",
        classTypes: [
          {
            name: "lab",
            duration: 2,
            capacity: 30,
            tutor_count: 1,
            classes: [
              {
                class_id: 1,
                building: "Learning Village",
                room: "G08",
                day: "MON",
                time: 900,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 2,
                building: "Learning Village",
                room: "G09",
                day: "MON",
                time: 1100,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 3,
                building: "Learning Village",
                room: "G08",
                day: "MON",
                time: 1600,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 4,
                building: "Learning Village",
                room: "G11",
                day: "WED",
                time: 900,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 5,
                building: "Learning Village",
                room: "1.05",
                day: "WED",
                time: 1800,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 6,
                building: "Learning Village",
                room: "G08",
                day: "FRI",
                time: 900,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 7,
                building: "Learning Village",
                room: "G06",
                day: "FRI",
                time: 1400,
                weeks: "101010101010", // only on odd weeks
                attend_type: "in-person",
              },
              {
                class_id: 8,
                building: "Learning Village",
                room: "G08",
                day: "FRI",
                time: 1500,
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
                class_id: 1,
                building: "Woodside",
                room: "3.01",
                day: "TUE",
                time: 1100,
                weeks: "111111111111",
                attend_type: "online-realtime",
              },
              {
                class_id: 2,
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
      {
        year: 2025,
        semester: 2,
        campus: "clayton",
        classTypes: [
          {
            name: "tutorial",
            duration: 1,
            capacity: 120,
            tutor_count: 3,
            classes: [
              {
                class_id: 1,
                building: "Woodside",
                room: "3.01",
                day: "TUE",
                time: 1100,
                weeks: "111111111111",
                attend_type: "online-realtime",
              },
              {
                class_id: 2,
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
                class_id: 1,
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
                class_id: 2,
                building: "LTB",
                room: "2.01",
                day: "TUE",
                time: 1500,
                weeks: "010101010101",
                attend_type: "in-person",
              },
              {
                class_id: 3,
                building: "LTB",
                room: "2.01",
                day: "THU",
                time: 1500,
                weeks: "010101010101",
                attend_type: "in-person",
              },
              {
                class_id: 4,
                building: "Woodside",
                room: "2.01",
                day: "THU",
                time: 800,
                weeks: "010101010101",
                attend_type: "in-person",
              },
              {
                class_id: 5,
                building: "Woodside",
                room: "2.01",
                day: "THU",
                time: 1800,
                weeks: "010101010101",
                attend_type: "in-person",
              },
              {
                class_id: 6,
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
      {
        year: 2025,
        semester: 2,
        campus: "clayton",
        classTypes: [
          {
            name: "lecture",
            duration: 2,
            capacity: 80,
            tutor_count: 4,
            classes: [
              {
                class_id: 1,
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
                class_id: 2,
                building: "LTB",
                room: "2.01",
                day: "TUE",
                time: 1500,
                weeks: "010101010101",
                attend_type: "in-person",
              },
              {
                class_id: 3,
                building: "LTB",
                room: "2.01",
                day: "THU",
                time: 1500,
                weeks: "010101010101",
                attend_type: "in-person",
              },
              {
                class_id: 4,
                building: "Woodside",
                room: "2.01",
                day: "THU",
                time: 800,
                weeks: "010101010101",
                attend_type: "in-person",
              },
              {
                class_id: 5,
                building: "Woodside",
                room: "2.01",
                day: "THU",
                time: 1800,
                weeks: "010101010101",
                attend_type: "in-person",
              },
              {
                class_id: 6,
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
                class_id: 1,
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
                class_id: 2,
                building: "Woodside",
                room: "1.03",
                day: "MON",
                time: 1100,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 3,
                building: "Woodside",
                room: "1.08",
                day: "MON",
                time: 1700,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 4,
                building: "Woodside",
                room: "1.01",
                day: "WED",
                time: 1100,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 5,
                building: "Woodside",
                room: "1.03",
                day: "WED",
                time: 1800,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 6,
                building: "LTB",
                room: "1.03",
                day: "THU",
                time: 900,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 7,
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
      {
        year: 2025,
        semester: 2,
        campus: "clayton",
        classTypes: [
          {
            name: "workshop",
            duration: 2,
            capacity: 150,
            tutor_count: 3,
            classes: [
              {
                class_id: 1,
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
                class_id: 2,
                building: "Woodside",
                room: "1.03",
                day: "MON",
                time: 1100,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 3,
                building: "Woodside",
                room: "1.08",
                day: "MON",
                time: 1700,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 4,
                building: "Woodside",
                room: "1.01",
                day: "WED",
                time: 1100,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 5,
                building: "Woodside",
                room: "1.03",
                day: "WED",
                time: 1800,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 6,
                building: "LTB",
                room: "1.03",
                day: "THU",
                time: 900,
                weeks: "111111111111",
                attend_type: "in-person",
              },
              {
                class_id: 7,
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
            classes: [1, 4],
          },
          { unitcode: "FIT2004", classes: [] },
          { unitcode: "FIT2099", classes: [] },
          { unitcode: "FIT2100", classes: [] },
        ],
      },
      {
        year: 2025,
        semester: 2,
        unitEnrolment: [
          { unitcode: "FIT3134", classes: [] },
          { unitcode: "FIT3077", classes: [] },
        ],
      },
    ],
  },
];

// insert data
const seedDb = async () => {
  try {
    // clear existing data
    await Unit.deleteMany();
    await Student.deleteMany();

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
