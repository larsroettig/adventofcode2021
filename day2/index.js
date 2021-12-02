const data = require("./input.json");
let horizontal = 0;
let depth = 0;

console.log("--- Day 2: Dive! ---");

/*
 * forward X increases the horizontal position by X units.
 * down X increases the depth by X units.*
 * up X decreases the depth by X units.
 */
data.map(function (item) {
  const [key, value] = item;
  if (key === "forward") {
    horizontal += value;
  } else if (key === "up") {
    depth -= value;
  } else if (key === "down") {
    depth += value;
  }
});

console.log(horizontal * depth);

horizontal = 0;
depth = 0;
let aim = 0;

/**
 * down X increases your aim by X units.
 * up X decreases your aim by X units.
 * forward X does two things:
 *   It increases your horizontal position by X units.
 *   It increases your depth by your aim multiplied by X.
 */
data.map(function (item) {
  const [key, value] = item;

  switch (key) {
    case "forward": {
      horizontal += value;
      depth += value * aim;
      break;
    }
    case "up": {
      aim -= value;
      break;
    }
    case "down": {
      aim += value;
    }
    default:
      break;
  }
});

console.log(horizontal * depth);
