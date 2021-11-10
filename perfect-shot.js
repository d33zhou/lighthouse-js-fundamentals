const finalPosition = function (moves) {
  // Your code in here ...
  let endCoord = [0,0];

  for (const move of moves){
    if (move === "west" || move === "east"){
      if (move === "west"){
        endCoord[0] -= 1;
      } else{
        endCoord[0] += 1;
      }
    } else{
      if (move === "south"){
        endCoord[1] -= 1;
      } else{
        endCoord[1] += 1;
      }
    }
  }

  return endCoord;
}