function solution(a: number[]): boolean {
  let b: number[] = [];
  let startingIndex = 0;
  let endingIndex = a.length - 1;
  
  while (startingIndex < endingIndex) {
      b.push(a[startingIndex]);
      b.push(a[endingIndex]);
      startingIndex++;
      endingIndex--;
  }
  
  let sorted: boolean = true;

  for (let i = 0; i < b.length - 1; i++) {
    if (b[i] > b[i+1]) {
      sorted = false;
      break;
    }
  }

  return sorted;
}

console.log(solution([1, 3, 5, 6, 4, 2]));