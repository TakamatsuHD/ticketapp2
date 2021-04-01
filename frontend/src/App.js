import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import TicketScreen from "./screens/TicketScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          {/* this path will show the ticketscreen screen when the path is ticket/:id from the component */}
          <Route path="/login" component={LoginScreen} />
          <Route path="/ticket/:id" component={TicketScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          {/* this "/" redirects to anywhere so we need to add exact so that it only redirects to homescreen */}
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
