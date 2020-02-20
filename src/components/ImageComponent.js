import React from "react";
import { ImageContainer, NasaImageOTD, DateTitle, FontSizeDate, FontSizeTitle } from "./styles";

const ImageComponent = props => {

  if(!props.image) {
    return <h3>Loading...</h3>;
  }

  return (
    <ImageContainer className="image-container">
      <NasaImageOTD className="nasa-image-otd" src={props.image.url} alt="Stars from NASA" />
      <DateTitle className="date-title">
        <FontSizeDate>{props.image.date}</FontSizeDate>
        <FontSizeTitle>{props.image.title}</FontSizeTitle>
      </DateTitle>
    </ImageContainer>
  )
}

export default ImageComponent;