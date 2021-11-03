var express = require('express');
var router = express.Router();

let movies= [{
  movies :"SW1",
  id : "0"
}];

/* GET movies listing. */
router.get('/', function (req, res, next) {

  res.status(200).json({movies
  });
});

module.exports = router;

/*PUT new movies*/
router.put('/', function (req, res, next) {
  const { movie } = req.body;
  const id = _.uniqueId();
  movies.push({ movie, id });
  res.json({
    message: `Done = ${id}`,
    movies: { movie, id } 
  });
});