function solution(sizes) {
 
  let max1 = 0
  let max2 = 0

  for (i = 0; i < sizes.length; i++) {
    sizes[i].sort((a,b) => a- b)
    if (sizes[i][0] > max1) max1 = sizes[i][0]
    if (sizes[i][1] > max2) max2 = sizes[i][1]
  }
  return max1 * max2
}