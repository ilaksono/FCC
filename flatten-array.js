function steamrollArray(arr) {
  let a = [...arr];
  let temp = [];
  let i = 0;
  for(i = 0; i < a.length; i++)
    // if(a[i] === {})
    //   i++;
    while(Array.isArray(a[i])) {
      if(Array.isArray(a[i])) {
        temp = a[i];
        a.splice(i,1,...temp);
      }
    }
  console.log(a);
  return a;
}

console.log(steamrollArray([1, [], [3, [[4]]]]));