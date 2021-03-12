import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Ticket from "../components/Ticket";
import axios from "axios";

const HomeScreen = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const { data } = await axios.get("/api/tickets");
      setTickets(data);
    };
    fetchTickets();
  }, []);
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
