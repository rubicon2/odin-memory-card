function rangedRandom(min, max) {
  const range = max - min;
  const random = Math.random() * range;
  return min + random;
}

function rangedRandomInt(min, max) {
  return Math.round(rangedRandom(min, max));
}

function randomiseArray(arr) {
  const copy = [...arr];
  const randomised = [];
  while (copy.length) {
    const randomIndex = rangedRandomInt(0, copy.length - 1);
    const randomElement = copy.splice(randomIndex, 1)[0];
    randomised.push(randomElement);
  }
  return randomised;
}

export { rangedRandom, rangedRandomInt, randomiseArray };
