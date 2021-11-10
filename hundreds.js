function howManyHundreds(num){
  num = num - (num % 100);
  return num / 100;
}