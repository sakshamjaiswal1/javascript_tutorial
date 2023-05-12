function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const inorderTraversal = (root) => {
  const dfs = function (root, result) {
    if (root == null) {
      return result;
    }
    dfs(root.left, result);
    result.push(root.val);
    dfs(root.right, result);
    return result;
  };
  return dfs(root, []);
};

const generateTrees = function (n) {
  const generateBacktracking = (fs, lst) => {
    if (fst > lst) {
      return [undefined];
    }
    let tree = [];
    for (let val = fst; val <= lst; val++) {
      for (let left of generateBacktracking(fst, val - 1)) {
        for (let right of generateBacktracking(val + 1, lst)) {
          let node = new TreeNode(val, left, right);
          tree.push(node);
        }
      }
    }
    return tree;
  };

  return generateBacktracking(1, n);
};
