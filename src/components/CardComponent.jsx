import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardComponent = ({ title, description, image, url }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link class="btn btn-primary" to={url}>
            Acessar
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
