function lastIndexOf(arr,num){
  let lastIndex = -1;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === num){
      lastIndex = i;
    }
  }

  return lastIndex;
}