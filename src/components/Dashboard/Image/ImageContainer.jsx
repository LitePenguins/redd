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

    // props.links = props.links.filter((obj) => {
    //   return obj.id !== id;
    // });
  };

  return (
    <div>
      {undefined !== props.links && props.links.length === 0 ? null : (
        <h1
          id="imageContainerTitle"
          style={{ paddingLeft: "1em", paddingTop: "1em" }}
        >
          Images
        </h1>
      )}

      <section
        id="imageSection"

        //TODO: fix for hiding title block
        // style={{
        //   display:
        //     undefined !== props.links && props.links.length === 0
        //       ? "none"
        //       : "block",
        // }}
      >
        {
          <div className="row">
            {props.load &&
              Array(6)
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
