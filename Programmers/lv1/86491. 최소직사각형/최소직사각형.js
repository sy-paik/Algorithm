function solution(sizes) {
  sizes = sizes.map((size) => (size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]));

  let maxWidth = 0;
  let maxHeight = 0;

  for (let i = 0; i < sizes.length; i++) {
    const width = sizes[i][0];
    const height = sizes[i][1];

    maxWidth = Math.max(maxWidth, width);
    maxHeight = Math.max(maxHeight, height);
  }

  return maxWidth * maxHeight;
}