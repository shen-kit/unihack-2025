import { Unit } from "../schemas/unitSchema.js";

/**
 * Returns data in the format:
 *
 * {
 *     "class_id": 3171202511,
 *     "building": "Woodside",
 *     "room": "LG02",
 *     "day": "TUE",
 *     "time": 1400,
 *     "weeks": "111111111111",
 *     "attend_type": "hybrid",
 *     "_id": "67d62d8437e045298044afa7",
 *     "unitcode": "3171"
 * }
 *
 */
export const getClassFromClassId = async (req, res) => {
  try {
    const { classId } = req.params;
    if (!classId) {
      return res
        .status(400)
        .json({ success: false, data: "Class ID required in params" });
    }

    const classIdNum = parseInt(classId, 10);

    const result = await Unit.aggregate([
      { $unwind: "$offerings" },
      { $unwind: "$offerings.classTypes" },
      { $unwind: "$offerings.classTypes.classes" },
      { $match: { "offerings.classTypes.classes.class_id": classIdNum } },
      {
        $project: {
          "offerings.classTypes.classes": 1,
          "offerings.classTypes.name": 1,
          "offerings.classTypes.duration": 1,
        },
      },
    ]);

    if (!result) {
      return res.status(404).json({
        success: false,
        data: `Class with id ${classIdNum} not found`,
      });
    }

    const resultClass = result[0].offerings.classTypes.classes;
    resultClass.unitcode = classId.substring(0, 4);
    resultClass.duration = result[0].offerings.classTypes.duration;
    resultClass.classType = result[0].offerings.classTypes.name;

    return res.status(200).json({ success: true, data: resultClass });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Server error", data: err });
  }
};
