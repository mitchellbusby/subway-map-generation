import randomItem from "random-item";

const parisMetroColours = [
  "#ffbe00",
  "#0055c8",
  "#6e6e00",
  "#82c8e6",
  "#a0006e",
  "#ff5a00",
  "#82dc73",
  "#ff82b4",
  "#82dc73",
  "#d282be",
  "#d2d200",
  "#dc9600",
  "#6e491e",
  "#00643c",
  "#82c8e6",
  "#640082",
  "#a81032",
  "#e170a7",
  "#96c047",
  "#147a88"
];

const element = document.getElementById("canvas") as HTMLCanvasElement;
element.style.width = "500px";
element.style.height = "500px";

const ctx = element.getContext("2d");
ctx.scale(2, 2);

const numberOfStations = 10;

const stations = Array.apply(null, Array(numberOfStations)).map(() => {
  return {
    x: Math.floor(Math.random()*500),
    y: Math.floor(Math.random()*500),
  }
});

console.log(stations);

const colour = randomItem(parisMetroColours);

ctx.beginPath();
ctx.strokeStyle = colour;
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
