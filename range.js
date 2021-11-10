function range(start, end, step){
  let output = [];

  if (typeof start === "undefined" || typeof end === "undefined" || typeof step === "undefined"){
    return output;
  }

  if (start > end){
    return output;
  }

  if (step <= 0){
    return output;
  }

  for (start; start <= end; start += step){
    output.push(start);
  }

  return output;
}