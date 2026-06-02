import express from "express";
import studentRouter from "./routes/studentRouter.js";

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send({ message: "Server is up and running" });
});

// Student Routes
app.use("/api/students",studentRouter);

// Start Server
app.listen(3000, () => {
  console.log("Server is up and running");
});