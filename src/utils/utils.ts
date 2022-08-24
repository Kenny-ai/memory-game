const shuffle = (array: number[]) => {
  let m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

export const generateRandom = (n: number) => {
  let output: number[] = [];
  for (let i = 0; i < 2; i++) {
    let m = n;
    let array = [...Array(m + 1).keys()].slice(1);
    let arr: number[] = [];
    while (m > 0) {
      let randomNum = Math.floor(Math.random() * m);
      const removed: number = array.splice(array.indexOf(randomNum), 1).pop()!;
      arr.push(removed);
      m--;
    }
    output.push(...arr);
  }
  return shuffle(output);
};
