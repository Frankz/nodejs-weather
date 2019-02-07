var request = require('request');
var uri = 'http://api.openweathermap.org/data/2.5/weather?id=3844421&appid=d62fe47207084f66c61a3448a9af8145'

console.log('JavaScript timer trigger function ran!')

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
}