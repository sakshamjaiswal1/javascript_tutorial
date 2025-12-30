const curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
};

//  if you want to ccreate a setTimeeInterval with the help of SetTimeout
function setTimeInterval(fn, delay) {
  function repeat() {
    fn();
    setTimeout(repeat, delay);
  }
  setTimeout(repeat, delay);
}
