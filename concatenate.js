function concat(arr1, arr2){
  let output = [];

  for (const ar1 of arr1){
    output.push(ar1);
  }

  for (const ar2 of arr2){
    output.push(ar2);
  }

  return output;
}