var majorityElement = function(nums) {
    for (let i =0;i<nums.length;i++){
        let elem =nums[i]
        let count =0
        for(let j=0 ;j<nums.length;j++){
          
            if(elem===nums[j]){
                count++
                if(count>nums.length/2) return nums[i]
            }
        }
    }
};
// console.log(majorityElement([3,1,3]))

var majorityElement2 = function(nums) {
    
    let count = 1;
    let result = nums[0];
    
    //Boyer Moore algorithm
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== result) {
            count--;
        } 
        else if (nums[i] === result) {
            count++;
        }

        if (count === 0) {
            result = nums[i];
            count++;
        }
        
    }
    
    return result;
    
};
// console.log(majorityElement2([3,1,3]))
var apiCall =  async (code)=>{
    for(let i =1;i<26;i++){
        let response = await fetch(`https://jsonmock.hackerrank.com/api/countries?page=${i}`)
        let datas = await response.json()
        let matchCountry= datas.data.filter((country)=>country.alpha2Code===code)
        if(matchCountry.length>0){
            return console.log(matchCountry[0].name)
        }
    }
    
}
apiCall('ZW')