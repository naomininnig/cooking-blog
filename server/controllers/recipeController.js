require('../models/database.js')
const Category = require('../models/Category')
const Recipe = require('../models/Recipe')

/* homepage GET */
exports.homepage = async(req, res) => {
  try {
    const limitNumber = 5
    const categories = await Category.find({}).limit(limitNumber)
    const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
    const bbq = await Recipe.find({ 'category': "BBQ & Grill"}).limit(limitNumber);
    const mains = await Recipe.find({ 'category': 'Mains'}).limit(limitNumber);
    const pasta = await Recipe.find({ 'category': 'Pasta'}).limit(limitNumber);
    const snacks = await Recipe.find({ 'category': 'Snack'}).limit(limitNumber);
    const starters = await Recipe.find({ 'category': 'Starters'}).limit(limitNumber);
    const breakfast = await Recipe.find({ 'category': 'Breakfast'}).limit(limitNumber);
    const dessert = await Recipe.find({ 'category': 'Dessert'}).limit(limitNumber);
    const food = { latest, bbq, mains, pasta, snacks, starters, breakfast, dessert };
    res.render('index', {title: ' Cooking Blog | Home', categories, food});
  } catch (error) {
    res.status(400).send({message: error.message || "Oopsi, error :("})
  }
}

/* categories GET */
exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber)
    res.render('categories', {title: ' Cooking Blog | Categories', categories});
  } catch (error) {
    res.status(400).send({message: error.message || "Oopsi, error :("})
  }
}

/* categories by ID  GET */
exports.exploreCategoriesById = async(req, res) => {
  try {
    const categoryId = req.params.id
    const limitNumber = 20;
    const categoryById= await Recipe.find({'category': categoryId}).limit(limitNumber)
    res.render('categories', {title: ' Cooking Blog | Categories', categoryById});
  } catch (error) {
    res.status(400).send({message: error.message || "Oopsi, error :("})
  }
}

/* RECIPE PAGE GET /recipes/:id */
exports.exploreRecipe = async(req, res) => {
  try {
   const recipeId = req.params.id;
   const recipe = await Recipe.findById(recipeId)
    res.render('recipe', {title: ' Cooking Blog | Recipe', recipe});
  } catch (error) {
    res.status(400).send({message: error.message || "Oopsi, error :("})
  }
}

/* POST /search */
exports.searchRecipe = async(req, res) => {
  try {
    const searchTerm = req.body.searchTerm;
    const recipe = await Recipe.find({ $text: { $search: searchTerm, $diacriticSensitive: true}})
    res.render('search', {title: ' Cooking Blog | Search', recipe });
  } catch (error) {
    res.status(400).send({message: error.message || "Oopsi, error :("})
  }
  
}

//async function insertDommyRecepiesData(){
   //try{
     //await Recipe.insertMany([
      //{
        //"name":"",
        //         "desc": ` `,
        //         "email": "naomi.ninnig@gmail.com", 
        //         "ingredients": [
                  
        //         ],
        //         "category": "",
        //         "image": "",
              // },
        

         
     //]);
  // }catch(error) {
   //  console.log('err', + error);
   //}
 //}
 //insertDommyRecepiesData();



