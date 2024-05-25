import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [
  {
    name: "Alex",
    age: 13,
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

// Adding users to our mock database
router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`${user?.name} has been added to the Database`);
});

export default router;
