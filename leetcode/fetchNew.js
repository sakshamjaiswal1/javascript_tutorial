const https=require('https')
const Stream = require('stream').Transform
const fs= require('fs')


const getCountry=(code)=>{
   for(let i=1;i<26;i++){
    https.get(`https://jsonmock.hackerrank.com/api/countries?page=${i}`,resp=>{
        let data='';
        resp.on('data',chunk=>{
            data+=chunk;
        })
        resp.on('end',()=>{
            let page = JSON.parse(data)
            // console.log(page.data)

            for(let i=0;i<page.data.length;i++){
                if(page.data[i].alpha2Code===code){
                    return console.log(page.data[i].name)
                }
            }
        //   let matchCountry= page.data.filter(country=>country.alpha2Code===code)
        //   if(matchCountry.length>1){
        //       console.log(matchCountry[0].name)
        //   } 
        //   console.log(page)
            // console.log(data)
    
        })
    })
   }
 
}

getCountry("BG")