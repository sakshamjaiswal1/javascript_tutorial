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


const bestHand = (ranks, suits) => {
    const rankCounts = new Map()
	const suitCounts = new Map()

	for (let i = 0; i < ranks.length; i++) {
		rankCounts.set(ranks[i], (rankCounts.get(ranks[i]) || 0) + 1)
		suitCounts.set(suits[i], (suitCounts.get(suits[i]) || 0) + 1)
	}

	if (Math.max(...suitCounts.values()) === 5) {
		return 'Flush'
	} else if (Math.max(...rankCounts.values()) === 3) {
		return 'Three of a Kind'
	} else if (Math.max(...rankCounts.values()) === 2) {
		return 'Pair'
	} else {
		return 'High Card'
	}
}