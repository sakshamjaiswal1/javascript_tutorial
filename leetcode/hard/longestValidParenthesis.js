const longestParenthesis = (s)=>{
    let stack =[-1]
    let max=0
    for(let i=0;i<s.length;i++){
        if(s[i]==='(') stack.push(i)
        else{
            stack.pop()
            if(stack.length===0)stack.push(i)
            let top = stack.length -1
            max = Math.max(max,i-stack[top])
        }
    }
    return console.log(max)
}

longestParenthesis("((((()")
var longestValidParentheses = function (s) {
    let open = 0,
      close = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
      s[i] === "(" ? open++ : close++;
      if (open === close) max = Math.max(max, close * 2);
      if (close > open) {
        open = 0;
        close = 0;
      }
    }
    open = 0;
    close = 0;
    for (let i = s.length - 1; i >= 0; i--) {
      s[i] === ")" ? close++ : open++;
      if (open === close) max = Math.max(max, open * 2);
      if (open > close) {
        open = 0;
        close = 0;
      }
    }
    return max;
  };