const GM = 398600.4418;
const earthRadius = 6367.4447;

const orbitalPeriod = (arr) =>
  arr.map((obj) => ({
    name: obj.name,
    orbitalPeriod: Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)
    ),
  }));

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
// [
//   {name: "sputnik", orbitalPeriod: 86400}
// ]

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);
// [
//   {name : "iss", orbitalPeriod: 5557},
//   {name: "hubble", orbitalPeriod: 5734},
//   {name: "moon", orbitalPeriod: 2377399}
// ];
