require('../models/database.js')
const Category = require('../models/Category')

/* homepage GET */

exports.homepage = async(req, res) => {

  try {
    
    const limitNumber = 5
    const categories = await Category.find({}).limit(limitNumber)
    res.render('index', {title: ' Cooking Blog | Home', categories});
  } catch (error) {
    res.status(400).send({message: error.message || "Oops, error :("})
  }


}

