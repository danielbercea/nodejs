import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

console.dir(process.env);

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("HELLO FROM HOMEPAGE"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
