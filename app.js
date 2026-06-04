import express from "express";
import studentRouter from "./routes/studentRouter.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json()); // middleware
app.use(logger);

// Home Route
const students = [];

app.get("/", (req, res) => {
  res.send({ message: "Server is up and running" });
});

// Error Route
app.get("/error", (req, res) => {
  let err = new Error("This is test error simulation");
  throw err;
});

// Student Routes
app.use("/api/students", studentRouter);

// Error Handler Middleware (must be last)
app.use(errorHandler);

// Start Server
app.listen(3000, () => {
  console.log("Server is up and running");
});