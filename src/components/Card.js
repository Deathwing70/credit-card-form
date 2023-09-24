import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import {
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate,
} from "./utils";
const Card = () => {
  const [data, setData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
    issuer: "",
  });

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    }
    if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    }
    if (target.name === "cvc") {
      target.value = formatCVC(
        data.number ? data.number : undefined,
        target.value
      );
    }
    setData({ ...data, [target.name]: target.value });
  };

  const handleInputFocus = (e) => {
    setData({ ...data, focus: e.target.name });
  };

  return (
    <Container className="p-4 position-relative">
      <Container>
        <Cards
          number={data.number}
          expiry={data.expiry}
          cvc={data.cvc}
          name={data.name}
          focused={data.focus}
        />
      </Container>
      <Container className="mt-2 card">
        <Form className="form-card-input">
          <Form.Group className="mb-3 mt-5">
            <Form.Control
              type="tel"
              name="number"
              required
              placeholder="Card Number"
              value={data.number}
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Control
                placeholder="Valid thru..."
                type="text"
                name="expiry"
                value={data.expiry}
                onChange={(e) => handleInputChange(e)}
                onFocus={(e) => handleInputFocus(e)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                type="tel"
                name="cvc"
                placeholder="CVC"
                value={data.cvc}
                onChange={(e) => handleInputChange(e)}
                onFocus={(e) => handleInputFocus(e)}
              />
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </Container>
  );
};

export default Card;
