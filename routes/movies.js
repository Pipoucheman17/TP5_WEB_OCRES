// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

var express = require('express');
var router = express.Router();

let movies = [{
  movie: "ça",
  id: "0"
}];

/* GET movies listing. */
router.get('/', function (req, res, next) {
  res.status(200).json({
    movies
  });
});

/*GET with ID*/
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const movie = _.find(movies, ["id", id]);
  res.status(200).json({
    message: "Movie found",
    movie
  });
});

module.exports = router;

/*PUT new movies*/
router.put('/', function (req, res, next) {
  const { movie } = req.body;
  const id = _.uniqueId();
  movies.push({ movie, id });
  res.json({
    message: `Done = ${id}, ${movie}`,
    movie
  });
});

/*UPDATE movies*/
router.post('/:id', (req, res) => {
  const { id } = req.params;
  const { movie } = req.body;
  const movieToUpdate = _.find(movies, ["id", id]);
  movieToUpdate.movie = movie;
  res.json({
    message: `Movie ${id} updated`
  })
});


