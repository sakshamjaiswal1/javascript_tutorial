const restoreIpAddresses = (s) => {
  const addresses = [];
  if (s.length > 12) return addresses;

  function backtrack(i, dots, ip) {
    if (dots === 4 && i === s.length) {
      addresses.push(ip.slice(0, ip.length - 1));
      return;
    }
    if (dots > 4) {
      return;
    }
    for (let j = i; j < Math.min(i + 3, s.length); j++) {
      if (parseInt(s.slice(i, j + 1)) <= 255 && (s[i] !== "0" || i === j)) {
        backtrack(j + 1, dots + 1, ip + s.slice(i, j + 1) + ".");
      }
    }
  }
  backtrack(0, 0, "");
  return addresses;
};
