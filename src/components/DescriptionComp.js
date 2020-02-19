import React from "react";

const DescriptionComp = props => {

  if(!props.data) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="description-container">
      <p>{props.data.explanation}</p>
    </div>
  )
}

export default DescriptionComp;