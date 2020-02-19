import React, { useState, useEffect } from "react";
import ImageComponent from "./ImageComponent";
import DescriptionComp from "./DescriptionComp";
import TitleComp from "./TitleComp";

export default function Image() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=GWzMC81MiiFRTwWvahnH0L5LceUFoP6fMSrCPVut")
    .then(res => res.json())
    .then(response => {
      setData(response);
    })
    .catch(err => console.log("Something went wrong fetching the API", err));
  }, []);

  return (
    <div className="image-otd">
      <ImageComponent image={data}/>
      <div className="text-container">
        {/* <TitleComp data={data}/> */}
        <DescriptionComp data={data}/>
      </div>
    </div>
  )
}