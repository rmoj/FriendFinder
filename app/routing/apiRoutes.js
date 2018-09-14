var friends = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function(req, res) {
    var bestMatch = {
      name: '',
      photo: '',
      difference: 100
    };

    var user = req.body;
    var userScores = user.scores;

    var totalDifference = 0;

    friends.forEach(function(friend) {
      totalDifference = 0;
      var friendScores = friend.scores;

      for (var i = 0; i < friendScores.length; i++) {
        totalDifference += Math.abs(
          parseInt(userScores[i]) - parseInt(friendScores[i])
        );
      }

      if (totalDifference <= bestMatch.difference) {
        bestMatch.name = friend.name;
        bestMatch.photo = friend.photo;
        bestMatch.difference = totalDifference;
      }

      friends.push(user);

      res.json(bestMatch);
    });
  });
};
