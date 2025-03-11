function countProperties(obj) {
    const keys = Object.keys(obj);
    return keys.length;
  }

console.log(countProperties({ a: 1, b: 2, c: 3 })); 
  