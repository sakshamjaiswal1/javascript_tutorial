const mergeTwoLists = function(list1, list2) {
    for(let item of list2){
        list1.push(item)
    }
    return console.log(list1.sort())
};
mergeTwoLists([1,3,4,1],[4,5,6])