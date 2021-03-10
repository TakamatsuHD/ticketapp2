import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Ticket = ({ ticket }) => {
  console.log(ticket.numReviews);
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/ticket/${ticket._id}`}>
        <Card.Img src={ticket.image} variant='top' />
      </a>
      <Card.Body>
        <a href={`/ticket/${ticket._id}`}>
          <Card.Title as='div'>
            <strong>{ticket.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <Rating value={ticket.rating} text={ticket.numReviews}></Rating>
        </Card.Text>
        <Card.Text as='h3'>${ticket.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Ticket;
