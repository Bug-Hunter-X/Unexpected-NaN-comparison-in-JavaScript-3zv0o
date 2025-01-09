function foo(a, b) {
  if (isNaN(a) && isNaN(b)) {
    return true; 
  } else if (a === b) {
    return true; 
  }
  return false;
}

console.log(foo(NaN, NaN)); //true
console.log(foo(5,5)); //true
console.log(foo(5,6)); //false