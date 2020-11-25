// import "./ImageCardSkeleton.css";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

import React from "react";

const ImageCardSkeleton = () => {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-2 mb-4 d-flex align-items-stretch">
      <Card>
        {/* <Card.Img variant="top">
          <Skeleton height={28} width={300} />
        </Card.Img> */}
        <Skeleton height={300} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="mt-auto">
            <Skeleton />
          </Card.Title>
          <Card.Subtitle className="text-muted">
            <Skeleton width={75} />
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Skeleton width={150} />

          {/* <Button variant="danger">
            <FontAwesomeIcon icon={faTrash} size="xs" />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faDownload} size="xs" />
          </Button>
          <Button variant="success">
            <FontAwesomeIcon icon={faUpload} size="xs" />
          </Button> */}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ImageCardSkeleton;
