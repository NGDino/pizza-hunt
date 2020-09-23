const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

//add prefidx of /pizzas
router.use('/pizzas', pizzaRoutes)

module.exports = router;