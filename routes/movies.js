var express = require('express');
var router = express.Router();

/* GET movies listing. */
router.get('/', function(req, res, next) {
  res.send('YES');
});

module.exports = router;

/*PUT new movies*/
router.put('/',function(req, res, next){
    const {movies} = req.body;
    const id = _.unique();
    movies.push({movie,id});
    res.json({
        message: `ça marche frère = ${id}`,
        movies:{movies,id}
    });
});