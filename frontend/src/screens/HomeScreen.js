import React from "react";
import { Row, Col } from "react-bootstrap";
import tickets from "../tickets";
import Ticket from "../components/Ticket";

const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {tickets.map((ticket) => (
          <Col key={ticket._id} sm={12} md={6} lg={4} xl={3}>
            <Ticket ticket={ticket} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
