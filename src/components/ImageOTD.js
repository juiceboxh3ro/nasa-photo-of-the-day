import React, { useState, useEffect } from "react";
import ImageComponent from "./ImageComponent";
import DescriptionComp from "./DescriptionComp";
// import TitleComp from "./TitleComp";
import { ImageOTD } from "./styles";

export default function Image() {
  const [data, setData] = useState();
  const [date, setDate] = useState('2020-02-20');

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=GWzMC81MiiFRTwWvahnH0L5LceUFoP6fMSrCPVut`)
    .then(res => res.json())
    .then(response => {
      setData(response);
    })
    .catch(err => console.log("Something went wrong fetching the API", err));
  }, [date]);

  return (
    <ImageOTD className="image-otd">
      <ImageComponent image={data}/>
      <div className="text-container">
        <DescriptionComp data={data}/>
      </div>
    </ImageOTD>
  )
}