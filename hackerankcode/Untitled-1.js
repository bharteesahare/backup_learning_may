var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/shopping-list', (req, res) => {
  const idParams = req.query.ids;

  if (!idParams) {
    return res.status(400).send('BAD_REQUEST');
  }

  const ids = idParams.split(',').map(Number);

  const ingredients = recipes
    .filter(recipe => ids.includes(recipe.id))
    .flatMap(recipe => recipe.ingredients);

  if (ingredients.length === 0) {
    return res.status(404).send('NOT_FOUND');
  }

  res.json(ingredients);
});

module.exports = router;
