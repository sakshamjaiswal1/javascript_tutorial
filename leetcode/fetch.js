const https = require('https')
const apiData = async ()=>{
   let data
    const options = {
        hostname: 'jsonmock.hackerrank.com',
   
        path: '/api/countries?page=3',
        method: 'GET',
      
      }
      
      var req = https.request(options, function(res)
{
  
    var content='';
    res.on('data', function (chunk)
    {
      // chunk contains data read from the stream
      // - save it to content
      content += chunk;
    });

    res.on('end', function()
    {
      // content is read, do what you want
      console.log( JSON.parse( content) );
    });
});
req.end();
}
apiData()
