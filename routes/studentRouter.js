import express from "express";
import {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent
} from "../controller/studentController.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router; 


//error handler