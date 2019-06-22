var path = require('path');
//***********************
// Routing
//***********************
module.exports = function(app) {
// // Basic route that sends the userto the home page
  app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, '../index.html'));
  });
//   //route to display the survey page - survery.html)
  app.get('/tpl/item.html', function (req, res) {
      res.sendFile(path.join(__dirname, '../tpl/item'));
  });

//   // If no matching route is found default to home
//   app.use(function (req, res) {
//       res.sendFile(path.join(__dirname + '/../public/home.html'));
//   });
};