const express = require("express");
const tickets = require("./data/tickets");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/tickets", (req, res) => {
  res.json(tickets);
});

app.get("/api/tickets/:id", (req, res) => {
  const ticket = tickets.find((p) => p._id === req.params.id);
  res.json(ticket);
});

app.listen(5000, console.log("server running on port 5000"));
