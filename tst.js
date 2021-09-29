console.log("saksham");
function diffArray(a1, a2) {
  //     var a=[],diff=[]
  //     for (var i=0;i<a1.length;i++){
  // a[a1[i]]=true
  //     }
}
let z = ["red", 2, 3, 4],
  y = [];
y[z[0]] = true;
console.log(y[z[2]]);
function arrayDiff(a1, a2) {
  var a = [],
    diff = [];
  for (var i = 0; i < a1.length; i++) {
    // a[a1[i]] = true;
    console.log(a[a1[i]]);
  }
  for (var i = 0; i < a2.length; i++) {
    if (a[a2[i]]) {
      delete a[a2[i]];
    } else {
      a[a2[i]] = true;
    }
  }
  for (var k in a) {
    diff.push(k);
  }
  return diff;
}

console.log(arrayDiff(["red", 2, 3, 4, 5], [1, 2, 3, 4]));
