import styled from "styled-components";

/*const dark_pink = "#e84393";
const robin_egg = "#00cec9";
const exodus_fruit = "#6c5ce7";
const shy_moment = "#a29bfe";
*/
const light_pink = "#fd79a8";
const city_lights = "#dfe6e9";
const dracula = "#2d3436";

// Parent component
export const ImageOTD = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// Description Component

export const DescriptionContainer = styled.div`
  margin: 0 auto;
  padding: 30px;
  width: 600px;
  max-width: 600px;
  height: 630px;
  background: ${dracula};
  box-shadow: 9px -9px ${light_pink};
  border-radius: 3px;
  font-family: 'Tomorrow', sans-serif;
  letter-spacing: 1.4px;
  line-height: 2.4;
  font-size: 2.4rem;
`;

// Image Component
export const ImageContainer = styled.div`
  width: 600px;
  height: 600px;
  padding-bottom: 130px;
  margin: 0 50px 0 auto;
  background: ${city_lights};
  box-shadow: 9px -9px ${light_pink};
  border-radius: 3px;
`;

export const NasaImageOTD = styled.img`
  margin-top: 25px;
  width: 550px;
  height: 550px;
  border-radius: 3px;
  object-fit: cover;
`;

export const DateTitle = styled.div`
  width: 95%;
  margin: 18px auto;
  padding: 12px 0;
  font-family: 'Permanent Marker', cursive;
  color: ${dracula};
  border-radius: 8px;
  box-shadow: -5px -5px 10px #fdfefe, 5px 5px 10px #adbfc6;

  &:first-child {
    font-size: 3.8rem;
  }
`;

export const FontSizeDate = styled.p`
  font-size: 3.2rem;
`;

export const FontSizeTitle = styled.p`
  font-size: 2.4rem;
`;