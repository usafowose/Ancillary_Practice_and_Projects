function calPoints(operations: string[]): number {
  let opsCopy = [...operations];
  let record: number[] = [];
  let totalScore: number = 0;

  for (let i=0; i<opsCopy.length; i++) {
      let op: string = opsCopy[i];
      if (isNaN(Number(op))) {
          if (op === 'C') {
              record.pop();
          } else if (op === 'D') {
              record.push(2 * +record[record.length-1]);
          } else {
              record.push(+record[record.length - 1] + +record[record.length - 2]);
          }
      } else {
          record.push(+op);
      }
  }

  return record.reduce((a,b) => a+b, 0);
};

console.log(calPoints(["5","2","C","D","+"]));