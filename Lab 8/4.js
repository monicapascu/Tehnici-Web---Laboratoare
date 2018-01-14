function multiplicator(element) {
    return 2 * element;
}

var arr = [1,2,3];

arr.map = function map(multiplicator){
  for(i=0;i<arr.length;i++)
  {arr[i] = multiplicator(arr[i]);}
  return arr;
}

var arr2 = arr.map(multiplicator);
console.log(arr2);
