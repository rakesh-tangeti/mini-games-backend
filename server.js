const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let scores = [];

// Save score
app.post("/save-score", (req, res) => {
  const { username, score } = req.body;

  scores.push({ username, score });

  res.send("Score saved");
});

// Leaderboard
app.get("/leaderboard", (req, res) => {
  const sorted = scores.sort((a, b) => b.score - a.score);
  res.json(sorted.slice(0, 10));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});