// write a method to determine the k closest points to the origin in a 3d space, given a list of points
// Example of input: [
//  [3, 6, 3],
//  [2, 2, 0],
//  [1, 1, 1],
//  [0, 0, 0],
//  [4, 4, 4]
// ]

// k=3
// [[0, 0, 0], [1, 1, 1], [2, 2, 0]]

// distance = sqrt(x^2 + y^2 + z^2)

const kClosest = (points: number[][]) : number[][] => {
  const distances = {};
  for (let i =0; i < points.length; i++) {
    let currentPoint = points[i];
    distances[i] = Math.sqrt(Math.pow(currentPoint[0], 2) + Math.pow(currentPoint[1], 2) + Math.pow(currentPoint[2], 2));
  }
  const sortedDistances = Object.k
  return;
}