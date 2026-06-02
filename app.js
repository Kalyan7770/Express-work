import express from "express";

const app = express();
app.use(express.json()); // middleware // inventory 

const students = [];

app.get("/", (req, res) => {
  res.send({ message: "Server is up and running" });
});

app.get("/api/students", (req, res) => {
  res.send({ students });
});

app.post("/api/students", (req, res) => {
  const data = req.body;

  students.push({
    ...data,
    id: students.length + 1,
  });

  res.send({ message: "student added", student: data });
});

app.listen(3000, () => {
  console.log("server is up and running");
});


