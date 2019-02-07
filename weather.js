var request = require('request');
var uri = 'http://api.openweathermap.org/data/2.5/weather?id=3844421&appid=d62fe47207084f66c61a3448a9af8145'
module.exports = function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if(myTimer.isPastDue)
    {
        //context.log('JavaScript is running late!');
        console.log('JavaScript is running late!');
    }
    //context.log('JavaScript timer trigger function ran!', timeStamp);   
    console.log('JavaScript timer trigger function ran!', timeStamp)
    request(uri, function (err, response, body) {
        if (err) {
            //context.log(err);
            console.log(err)
        }

        if (!err && response.statusCode == 200) {
            // context.log(body)
            console.log(body)
            var myData = JSON.parse(body);
            myData.nublado = myData.clouds.all;
            //context.bindings.outputEventHubMessage = JSON.stringify(myData);
            //context.log(JSON.stringify(myData));
            console.log(JSON.stringify(myData));
        }
        //context.done();
    });
};