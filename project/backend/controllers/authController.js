import { Student } from "../schemas/studentSchema.js";

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Student.findOne({ email: email, passwd: password });

    if (!user)
      return res.status(401).json({ success: false, data: "No user found" });
    else return res.status(200).json({ success: true, data: user });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, error: "error trying to fetch from db" });
  }
};
