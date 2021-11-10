function chooseStations(toChoose){
  let chosen = [];

  for (let i = 0; i < toChoose.length;i++){
    if (toChoose[i][1] >= 20 && (toChoose[i][2] === "school" || toChoose[i][2] === "community centre")){
      chosen.push(toChoose[i][0]);
    }
  }

  return chosen;
}

chooseStations(stations);