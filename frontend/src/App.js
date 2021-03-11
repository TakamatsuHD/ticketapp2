import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import TicketScreen from "./screens/TicketScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          {/* this "/" redirects to anywhere so we need to add exact so that it only redirects to homescreen */}
          <Route path='/' component={HomeScreen} exact />
          <Route path='/ticket/:id' component={TicketScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
