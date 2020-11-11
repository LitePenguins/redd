import React from "react";

import ImageCard from "./ImageCard";
import ImageCardSkeleton from "./ImageCardSkeleton";
import "./ImageContainer.css";

const ImageContainer = (props) => {
  // const [images, setImages] = useState([]);
  // setImages(prevImages => {
  //   [...prevImages, i]
  // })

  // console.log(props);

  const deleteItem = (id) => {
    console.log(id);
  };

  return (
    <div>
      {undefined !== props.links && props.links.length === 0 ? null : (
        <h1 style={{ paddingLeft: "1em", paddingTop: "1em" }}>Images</h1>
      )}

      <section
        id="imageSection"
        style={{
          display:
            undefined !== props.links && props.links.length === 0
              ? "none"
              : "block",
        }}
      >
        {
          <div className="row">
            {props.load &&
              Array(12)
                .fill()
                .map((value, index) => {
                  return <ImageCardSkeleton key={index} />;
                })}
            {!props.load &&
              props.links.map((imageItem) => {
                return (
                  <ImageCard
                    data={imageItem}
                    key={imageItem.id}
                    onDelete={deleteItem}
                    load={props.load}
                  />
                );
              })}
          </div>
        }
      </section>
    </div>
  );
};

export default ImageContainer;
