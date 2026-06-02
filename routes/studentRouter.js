import express from "express";
import {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent
} from "../controller/studentController.js";

const router = express.Router();

router.get("/api/students", getStudents);
router.post("/api/students", addStudent);
router.put("/api/students/:id", updateStudent);
router.delete("/api/students/:id", deleteStudent);

export default router;