const combine = (n, k) => {
  const res = [];
  const helper = (comb, offset) => {
    if (comb.length === k) return res.push([...comb]);
    for (let i = offset; i <= n; i++) {
      comb.push(i);
      helper(comb, i + 1);
      comb.pop();
    }
  };

  helper([], 1);
  return res;
};

const combine2 = (n, k) => {
  const res = [];
  const track = [];
  const backtrack = (n, k, start) => {
    if (track.length === k) {
      res.push(track.slice());
      return;
    }
    if (track.length > k) return;
    for (let i = start; i <= n; i++) {
      track.push(i);
      backtrack(n, k, i + 1);
      track.pop();
    }
  };
  backtrack(n, k, 1);
  return res
};
