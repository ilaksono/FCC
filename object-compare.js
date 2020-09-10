function whatIsInAName(collection, source) {
  var arr = [];
  let state = -1;
  for(let a of collection) {
      if(arrayCompare(a, source)) 
        arr.push(a)      
  }
  return arr;
}

const arrayCompare = (can, src) => {
  for(let a of Object.keys(src)) {
    if(can[a] != src[a])
      return false;
  }
  return true;
}
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));