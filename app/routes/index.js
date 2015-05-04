var request = require('request');

exports.index = function(req, res){
  res.render('index', { title: 'Cooper Union Instagram Proxy' });
};

exports.json = function(req, res, next) {
  res.set({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  });

  next();
};

exports.kimono = function(req, res, next) {

  //req.params.endpoint
  //req.query.apikey

  var url = 'https://www.kimonolabs.com/api/'+req.params.endpoint+'?apikey='+req.query.apikey;
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      res.send(body);

    }
  });

};
