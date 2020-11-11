import "./ImageCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import BootBox from "react-bootbox";

import React, { useState } from "react";

const ImageCard = (props) => {
  // console.log(props);
  const [display, setDisplay] = useState(false);

  const deleteItem = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props.data.id }),
    };

    fetch("/delete", options).then((res) => {
      console.log(res);
      props.onDelete(props.data.id);
      closeModal();
    });
  };

  const closeModal = () => {
    setDisplay(false);
  };

  const getFileName = (str) => {
    return str.substring(str.lastIndexOf("/") + 1);
  };

  const downloadImage = () => {
    console.log(props.data.url);
    fetch(props.data.url, {
      mode: "cors",
    })
      .then((response) => response.blob())
      .then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        const link = document.createElement("a");
        link.href = objectURL;
        link.id = "download";
        link.setAttribute("download", getFileName(props.data.url));
        document.body.appendChild(link);
        link.click();
        document.querySelector("#download").remove();
      });
  };

  const uploadData = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: props.data.title, id: props.data.id }),
    };

    fetch("/add", options).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="col-sm-6 col-lg-4 col-xl-2 mb-4 d-flex">
      <Card>
        {props.data.image ? (
          <Card.Img
            // className="align-middle"
            variant="top"
            src={props.data.url}
          />
        ) : (
          <video
            controls
            autoPlay
            loop
            height="500"
            src={props.data.videoUrl}
          ></video>
        )}

        <Card.Body className="d-flex flex-column">
          <Card.Title className="mt-auto">
            <a
              target="_blank"
              href={`https://www.reddit.com/r/${props.data.subreddit}/comments/${props.data.id}/`}
              rel="noopener noreferrer"
            >
              {props.data.title}
            </a>
          </Card.Title>
          <Card.Subtitle className="text-muted">
            <small>
              by&nbsp;
              <a
                target="_blank"
                href={`https://www.reddit.com/user/${props.data.author}/`}
                rel="noopener noreferrer"
              >
                {props.data.author}
              </a>
              &nbsp;
              <span>•</span>
              &nbsp;
              <span>{props.data.date}</span>
            </small>
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer className="text-muted">
          <small>
            <a
              target="_blank"
              href={`https://www.reddit.com/r/${props.data.subreddit}/`}
              rel="noopener noreferrer"
            >
              {props.data.subreddit}
            </a>
          </small>

          <Button
            variant="danger"
            onClick={() => {
              setDisplay(true);
            }}
          >
            <FontAwesomeIcon icon={faTrash} size="xs" />
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              downloadImage();
            }}
          >
            <FontAwesomeIcon icon={faDownload} size="xs" />
          </Button>
          <Button variant="success">
            <FontAwesomeIcon
              icon={faUpload}
              size="xs"
              onClick={() => {
                uploadData();
              }}
            />
          </Button>
        </Card.Footer>
      </Card>
      <BootBox
        message="Are you sure you want to delete this item?"
        show={display}
        onYesClick={deleteItem}
        onNoClick={closeModal}
        onClose={closeModal}
      />
    </div>
  );
};

export default ImageCard;
