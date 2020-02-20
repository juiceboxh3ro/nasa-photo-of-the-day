import React from "react";

export default const TitleComp = props => {

if(!props.data) {
  return <h3>Loading...</h3>;
}

return (
  <div className="title-container">
    <p>{props.data.date}</p>
    <p>{props.data.title}</p>
  </div>
)

}