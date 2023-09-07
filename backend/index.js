const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
connectToMongo();

const app = express();
const port = 5000;

app.use(
  cors({
    origin: ["https://i-notebook-ruddy.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// app.get("/", (req, res) => {
//   res.send("Hello Shan!");
// });

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
