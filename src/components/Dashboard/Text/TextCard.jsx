import "./TextCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import BootBox from "react-bootbox";

import React, { useState } from "react";

const TextCard = (props) => {
  console.log(props.data.selftext);
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

  const copyToClipboard = () => {
    console.log(props.data.url);
    props.onCopy(true);
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = props.data.url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
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
    <div className="col mb-4">
      <Card>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="mt-auto textTitle">
            <a
              target="_blank"
              href={`https://www.reddit.com/r/${props.data.subreddit}/comments/${props.data.id}/`}
              rel="noopener noreferrer"
            >
              {props.data.title}
            </a>
          </Card.Title>
          <Card.Subtitle
            className="text-muted"
            style={{ marginBottom: ".5em" }}
          >
            <small className="textAuthor">
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
          <Card.Text>
            {/* {undefined !== props.data.text && props.data.text.length > 300
              ? props.data.text.substring(0, 300) + "..."
              : props.data.text} */}
            {props.data.text}
          </Card.Text>
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
              copyToClipboard();
            }}
          >
            <FontAwesomeIcon icon={faClipboard} size="xs" />
          </Button>
          <Button
            variant="success"
            onClick={() => {
              uploadData();
            }}
          >
            <FontAwesomeIcon icon={faUpload} size="xs" />
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

export default TextCard;
