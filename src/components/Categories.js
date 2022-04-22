import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <a href="/Mens" style={{ textDecoration: "none", color: "#000" }}>
        <Card
          style={{
            width: "38rem",
            height: "13rem",
            borderRadius: "15px",

            marginTop: 40,
            display: "inline-block",
          }}
        >
          <Card.Body>
            <Card.Title>Men's Clothing</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </a>

      <a href="/Womens" style={{ textDecoration: "none", color: "#000" }}>
        <Card
          style={{
            width: "38rem",
            height: "13rem",
            borderRadius: "15px",
            marginLeft: 80,
            marginTop: 40,
            display: "inline-block",
          }}
        >
          <Card.Body>
            <Card.Title style={{}}>Women's Clothing</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </a>
    </>
  );
}
