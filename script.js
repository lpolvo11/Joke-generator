const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/joke", async (req, res) => {
  const response = await fetch(
    `https://official-joke-api.appspot.com/random_joke`
  );
  const data = await response.json();
  res.json(data);
});
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
