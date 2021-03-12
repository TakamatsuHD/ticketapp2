import express from "express";
import tickets from "./data/tickets.js";
import dotenv from "dotenv";
dotenv.config();

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

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
