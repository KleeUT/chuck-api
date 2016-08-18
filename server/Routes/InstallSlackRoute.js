var request = require('request');
module.exports = function(app){
  app.get('/installslack', (req, res) => {
    var client_id = "3358490050.67017692769";
    var secret = process.env.chuckSlackSecret;

    if(!secret){
      console.log("The client secret has not been set...");
      res.setStatus(500);
      res.end();
      return;
    }

    var code = req.query.code;
    var url = `https://slack.com/api/oauth.access?client_id=${client_id}&client_secret=${secret}&code=${code}`;
    request(url, function (error, response, body) {
      console.log(response.statusCode);
        if (!error && response.statusCode == 200) {
          console.log("slack register successful")
          res.redirect('/');
        }else{
          res.sendStatus(response.statusCode);
          res.end();
        }
    });
  });

}
