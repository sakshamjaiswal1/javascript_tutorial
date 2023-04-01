const swapPairs = (head) => {
  if (head === null) return null;
  if (head.next === null) return head;

  const ans = head.next;
  let cur = head;
  let temp = cur.next.next;
  while (true) {
    cur.next.next = cur;
    if (temp === null) {
      cur.next = null;
      break;
    } else if (temp.next === null) {
      cur.next = temp;
      break;
    }
    cur.next = temp.next;
    cur = temp;
    temp = cur.next.next;
  }
  return ans
};

var swapPairsss = function (head) {
  if (head === null) return null;
  if (head.next === null) return head;

  const ans = head.next;

  let cur = head;
  let temp = cur.next.next;

  while (true) {
    cur.next.next = cur;

    if (temp === null) {
      // even end
      cur.next = null;
      break;
    } else if (temp.next === null) {
      // odd end
      cur.next = temp;
      break;
    }

    cur.next = temp.next;
    cur = temp;
    temp = cur.next.next;
  }

  return ans;
};
