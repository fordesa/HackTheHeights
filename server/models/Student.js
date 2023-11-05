import mongoose from "mongoose";
const { Schema } = mongoose;

const StudentSchema = new Schema(
  {
    studentName: { type: String, unique: true },
    email: { type: String, unique: true },
    gradYear: {
      type: Number,
      default: 2023,
    },
    authZeroId: { type: String, unique: true },
    major: [String],
    region: String,
    isProfileComplete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const StudentModel = mongoose.model("Student", StudentSchema);

export default StudentModel;
