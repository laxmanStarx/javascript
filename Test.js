function x() {
  return function y() {
    return 5;
  }
}

console.log(x()());