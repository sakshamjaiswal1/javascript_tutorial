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
