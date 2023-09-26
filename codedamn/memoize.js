function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result
  };
}


const isPalindrome = (str) => {
	const len = str.length
	for (let i = 0; i < len / 2; i++) {
		if (str[i] !== str[len - 1 - i]) {
			return false
		}
	}
	return true
}

/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = function (words) {
	for (const word of words) {
		if (isPalindrome(word)) {
			return word
		}
	}
	return ''
}