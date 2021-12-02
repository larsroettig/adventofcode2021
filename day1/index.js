const data = require("./input.json");

console.log(
  "********************* Day 1: Sonar Sweep ********************************"
);

console.log(
  "------------------------------- Part 1 --------------------------------"
);
let prev = 0;
let increased = 0;
data.data.map((followers) => {
  if (prev === 0) {
    // we dont had follower data before an need to set a benchmark value
    prev = followers;
    return;
  }

  if (prev < followers) {
    increased++;
  }
  prev = followers;
});

console.log(increased);

console.log(
  "------------------------------- Part 2 --------------------------------"
);
const items = data.data;

const chunk_size = 3;
// rest values from previous challenge
prev = 0;
increased = 0;

for (index = 0; index < items.length; index++) {
  // we slice the array to get the next 3 items
  const myChunk = items.slice(index, index + chunk_size);
  // need to ignore period with less then 3 data points
  if (myChunk.length < chunk_size) {
    continue;
  }

  // calculated sum of the chunk
  const currentPeriodSum = myChunk.reduce((a, b) => a + b);

  if (prev === 0) {
    // we dont had follower data before an need to set a benchmark value
    prev = currentPeriodSum;
    continue;
  }

  if (prev < currentPeriodSum) {
    // follower based increase in the current period
    increased++;
  }

  prev = currentPeriodSum;
}

console.log(increased);
