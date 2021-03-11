import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import tickets from "../tickets";

const TicketScreen = ({ match }) => {
  //this findts the ticket by id by passing props in to match the params.id to the ticket
  const ticket = tickets.find((p) => p._id === match.params.id);
  console.log(ticket._id);

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            // className='resizedImage'
            src={ticket.image}
            alt={ticket.name}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{ticket.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={ticket.rating}
                text={`${ticket.numReviews} reviews`}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${ticket.price}</ListGroup.Item>
            <ListGroup.Item>Description: {ticket.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup.Item variant='flush'>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${ticket.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item variant='flush'>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {ticket.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className='btn-block'
                type='button'
                disabled={ticket.countInStock === 0}
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TicketScreen;
