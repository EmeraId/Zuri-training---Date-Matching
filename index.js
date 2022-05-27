let lady = ["Lily", "Sage", "Daisy", "Rose"];
let gent = ["Corey", "Jared", "Cane", "Trevor"];
let place = ["Debonair", "Lotus", "Palms", "Cactus"];

let randomLady = Math.floor(Math.random()*lady.length);
let randomGent = Math.floor(Math.random()*gent.length);
let randomPlace = Math.floor(Math.random()*place.length);

console.log(
  `${lady[randomLady]} and ${gent[randomGent]} will be going on a dinner date at ${place[randomPlace]}.`
)