require('../models/database.js')
const Category = require('../models/Category')

/* homepage GET */

exports.homepage = async(req, res) => {

  res.render('index', {title: ' Cooking Blog | Home'});

}

async function insertDummyCategoryData() {
  try {
    await Category.insertMany([
      {
        name: "Chinese",
        image: "chinese_food.png"
      },
      {name: "Thai",
        image: "thai_food.png"
      },
      {name: "Mexican",
        image: "mexican_food.png"
      }
    ]);
  } catch (error) {
    console.log('err', + error)
  }

}

insertDummyCategoryData();