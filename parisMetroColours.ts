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

const parisMetroColoursAsRgb = parisMetroColours.map(c => ({
  r: parseInt(c.slice(1, 3), 16),
  g: parseInt(c.slice(3, 5), 16),
  b: parseInt(c.slice(5, 7), 16)
}));

export { parisMetroColours, parisMetroColoursAsRgb };
