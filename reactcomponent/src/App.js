// src/App.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import Name from "./name";
import Price from "./price";
import Description from "./description";
import Image from "./image";
import productData from "./product";
import 'bootstrap/dist/css/bootstrap.min.css';

const firstName = "feriel"; // Replace with your first name
const App = () => {
  const S  = {color : "brown" , textAlign:'center'}
  return (
    <Container className="mt-5">
      
      <h1 style={S}>Bonjour</h1>
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p className="mt-3">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </p>
    </Container>
  );
};

export default App;
