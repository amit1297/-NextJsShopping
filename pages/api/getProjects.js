import Projects from "../../models/Projects";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  const data = await Projects.find();
  res.status(200).json(data);
};

export default connectDb(handler);
