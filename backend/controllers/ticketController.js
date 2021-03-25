import Ticket from "../models/ticketModel.js";
import asyncHandler from "express-async-handler";

const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({});
  res.json(tickets);
});

const getTicketById = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (ticket) {
    res.json(ticket);
  } else {
    res.status(404);
    throw new Error("Ticket not found");
  }
});

export { getTickets, getTicketById };
