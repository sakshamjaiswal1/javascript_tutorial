var plusOne = function (digits) {
    let co = true;
    for (let i = digits.length - 1; i >= 0 && co; i--) {
      digits[i]++;
      co = digits[i] >= 10;
      co && (digits[i] = 0);
    }
    co && digits.unshift(1);
    return digits;
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
