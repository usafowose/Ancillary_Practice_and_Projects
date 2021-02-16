//Remove all ending exclamation marks

const remove = (s) => [...s].reverse().map((cv, i, arr) => {
  return (cv === '!' && !arr[i - 1]) ? '' : (cv === '!' && arr[i - 1] === '!') ? '' : cv;
}).reverse().join('');

