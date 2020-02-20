import React from "react";

const ImageComponent = props => {

  if(!props.image) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <div className="image-container">
        <img className="nasa-image-otd" src={props.image.url} alt="Stars from NASA" />
        <div className="date-title">
          <p>{props.image.date}</p>
          <p>{props.image.title}</p>
        </div>
      </div>
    </div>
  )
}

export default ImageComponent;