var mySqrt = function(x) {
    
    if (x === 1) {
        return x;
    }
    
    let max = x;
    let min;
    
    function findSqrt(num) {
        
        let mid = Math.floor(num / 2);
        let square = mid * mid;
        
        if (square === x) {
            return mid;
        } else if (max - min === 1) {
            return min;
        } else if (square > x) {
            max = mid;
            return findSqrt(mid);
        } else if (square < x) {
            min = mid;
            return findSqrt(max + min);
        }
    }
    
    return findSqrt(x);
    
};

console.log(mySqrt(8))