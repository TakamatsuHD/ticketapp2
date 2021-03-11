import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import tickets from "../tickets";

const TicketScreen = (props) => {
  //this findts the ticket by id by passing props in to match the params.id to the ticket
  const ticket = tickets.find((p) => p._id === props.match.params.id);

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
    </>
  );
};

export default TicketScreen;
