import "./TextCard.css";
import Card from "react-bootstrap/Card";

import React from "react";
import Skeleton from "react-loading-skeleton";

const TextCardSkeleton = () => {
  return (
    <div className="col mb-4">
      <Card>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="mt-auto textTitle">
            <Skeleton />
          </Card.Title>
          <Card.Subtitle
            className="text-muted"
            style={{ marginBottom: ".5em" }}
          >
            <Skeleton />
          </Card.Subtitle>
          <Card.Text>
            <Skeleton />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Skeleton />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default TextCardSkeleton;
