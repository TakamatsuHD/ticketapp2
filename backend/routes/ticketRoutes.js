import express from "express";
const router = express.Router();
import Ticket from "../models/ticketModel.js";
import asyncHandler from "express-async-handler";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const tickets = await Ticket.find({});
    res.json(tickets);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);
    if (ticket) {
      res.json(ticket);
    } else {
      res.status(404);
      throw new Error("Ticket not found");
    }
  })
);

export default router;
