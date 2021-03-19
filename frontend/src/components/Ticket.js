import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Ticket = ({ ticket }) => {
  console.log(ticket.numReviews);
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/ticket/${ticket._id}`}>
        <Card.Img src={ticket.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/ticket/${ticket._id}`}>
          <Card.Title as='div'>
            <strong>{ticket.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          {/* this calls the Rating value passing in props ticket.rating and
          ticket.numreviews */}
          <Rating value={ticket.rating} text={ticket.numReviews}></Rating>
        </>
        <Card.Text as='h3'>${ticket.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Ticket;
