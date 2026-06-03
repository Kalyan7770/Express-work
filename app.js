import express from "express";
import studentRouter from "./routes/studentRouter.js";
import logger from "./middleware/logger.js"
const app = express();

app.use(express.json()); //middleware
app.use(logger);
// Home Route
app.get("/", (req, res) => {
  res.send({ message: "Server is up and running" });
});

// Student Routes
app.use("/api/students",studentRouter);
app.use(logger);

// Start Server
app.listen(3000, () => {
  console.log("Server is up and running");
});