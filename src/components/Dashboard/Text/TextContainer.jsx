import React, { useState } from "react";
import TextCard from "./TextCard";
import "./TextContainer.css";
import Toast from "react-bootstrap/Toast";
import TextCardSkeleton from "./TextCardSkeleton";

const TextContainer = (props) => {
  // console.log(props);
  //   const displayTextPosts = () => {
  //     return props.links.map((textItem) => {
  //       return <TextCard data={textItem} key={textItem.id} />;
  //     });
  //   };

  const [show, setShow] = useState(false);

  const deleteItem = (id) => {
    console.log(id);
  };

  const toggleToast = (status) => {
    setShow(status);
  };

  return (
    <div>
      {undefined !== props.links && props.links.length === 0 ? null : (
        <h1
          style={{
            display:
              undefined !== props.links && props.links.length === 0
                ? "none"
                : "block",
            paddingLeft: "1em",
            paddingTop: "1em",
          }}
        >
          Text and Link Posts
        </h1>
      )}

      <section
        id="textSection"
        style={{
          display:
            undefined !== props.links && props.links.length === 0
              ? "none"
              : "block",
        }}
      >
        {
          <div className="card-columns text">
            {props.load &&
              Array(12)
                .fill()
                .map((value, index) => {
                  return <TextCardSkeleton key={index} />;
                })}
            {!props.load &&
              props.links.map((textItem) => {
                return (
                  <TextCard
                    data={textItem}
                    key={textItem.id}
                    onDelete={deleteItem}
                    onCopy={toggleToast}
                  />
                );
              })}
          </div>
        }
      </section>
      <section style={{ position: "absolute" }}>
        <Toast
          style={{
            bottom: "32px",
            right: "32px",
            position: "fixed",
            zIndex: "11000",
          }}
          onClose={() => {
            setShow(false);
          }}
          show={show}
        >
          <Toast.Header style={{ float: "right" }}></Toast.Header>
          <Toast.Body>Copied to clipboard</Toast.Body>
        </Toast>
      </section>
    </div>
  );
};

export default TextContainer;
