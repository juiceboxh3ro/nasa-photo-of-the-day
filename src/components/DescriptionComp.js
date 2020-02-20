import React from "react";
import { DescriptionContainer } from "./styles";

const DescriptionComp = props => {

  if(!props.data) {
    return <h3>Loading...</h3>;
  }

  return (
    <DescriptionContainer className="description-container">
      <p>{props.data.explanation}</p>
    </DescriptionContainer>
  )
}

export default DescriptionComp;