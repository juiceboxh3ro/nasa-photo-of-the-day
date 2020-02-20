import React from "react";
import "./App.css";
import ImageOTD from "./components/ImageOTD";
import styled from "styled-components";

const AppH1 = styled.div`
  padding: 10px 0;
  font-size: 4.8rem;
  background: #6c5ce7;
  border-bottom: solid 5px #a29bfe;
`;


function App() {
  return (
    <div className="App">
      <AppH1>✧☆ Stars of the Day ☆✧</AppH1>
      <ImageOTD />
    </div>
  );
}

export default App;
