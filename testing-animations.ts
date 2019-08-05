import randomItem from "random-item";

import {parisMetroColoursAsRgb} from './parisMetroColours';

const element = document.getElementById("canvas") as HTMLCanvasElement;
element.style.width = "500px";
element.style.height = "500px";

const ctx = element.getContext("2d");
ctx.scale(2, 2);

const getStations = () => {
  const numberOfStations = Math.floor(Math.random() * 5) + 3;
  return Array.apply(null, Array(numberOfStations)).map(() => {
    return {
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500)
    };
  });
}

const render = (stations, colour: {r: number, g: number, b: number}) => {
  ctx.beginPath();
  // @ts-ignore
  ctx.strokeStyle = `rgb(${Object.values(colour).join(',')})`;
  ctx.lineWidth = 8;

  // Lines
  stations.forEach(station => {
    ctx.lineTo(station.x, station.y);
    ctx.moveTo(station.x, station.y);
    ctx.moveTo(station.x, station.y);
  });
  ctx.stroke();
  ctx.closePath();

  // Stations :D
  stations.forEach(station => {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(station.x, station.y, 13, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  });
};

// iv
let stations = getStations();
let colour = randomItem(parisMetroColoursAsRgb);

render(stations, colour);

setInterval(() => {
  const stationsTo = getStations();
  const colourTo = randomItem(parisMetroColoursAsRgb);
  const incr = 500;
  Array.apply(null, Array(incr)).map((_, idx) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, 500, 500);
      const intermediate = stations.map((station, i) => ({
        x: (station.x * ((incr - 1) - idx)) / (incr - 1) + (stationsTo[Math.min(i, stationsTo.length - 1)].x * idx) / (incr - 1),
        y: (station.y * ((incr - 1) - idx)) / (incr - 1) + (stationsTo[Math.min(i, stationsTo.length - 1)].y * idx) / (incr - 1)
      }));
      const intermediateColour = {
        r: (colour.r * ((incr - 1) - idx)) / (incr - 1) + (colourTo.r * idx) / (incr - 1),
        g: (colour.g * ((incr - 1) - idx)) / (incr - 1) + (colourTo.g * idx) / (incr - 1),
        b: (colour.b * ((incr - 1) - idx)) / (incr - 1) + (colourTo.b * idx) / (incr - 1),
      };
      render(intermediate, intermediateColour);
      if (idx === (incr - 1)) {
        stations = stationsTo;
        colour = colourTo;
      }
    }, (Math.atan((idx - incr / 2) / (4 * incr)) + 1) * 800);
  });
}, 2000);
