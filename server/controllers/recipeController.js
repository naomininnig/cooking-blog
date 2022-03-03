require('../models/database.js')
const Category = require('../models/Category')
const Recipe = require('../models/Recipe')
/* homepage GET */

exports.homepage = async(req, res) => {

  try {
    
    const limitNumber = 5
    const categories = await Category.find({}).limit(limitNumber)
    const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
    
    //Declaring all Categories:
    //1. bbq - 'BBQ & Grill'
    //2 mains - 'Mains'
    //3 pasta - 'Pasta'
    //4. snacks - 'Snacks'
    //5. starters - 'Starters
    //6. breakfast - 'Breakfast'
    //7.dessert - 'Dessert'
    const bbq = await Recipe.find({ 'category': 'BBQ & Grill'}).limit(limitNumber);
    const mains = await Recipe.find({ 'category': 'Mains'}).limit(limitNumber);
    const pasta = await Recipe.find({ 'category': 'Pasta'}).limit(limitNumber);
    const snacks = await Recipe.find({ 'category': 'Snacks'}).limit(limitNumber);
    const starters = await Recipe.find({ 'category': 'Starters'}).limit(limitNumber);
    const breakfast = await Recipe.find({ 'category': 'Breakfast'}).limit(limitNumber);
    const dessert = await Recipe.find({ 'category': 'Dessert'}).limit(limitNumber);


    const food = { latest, bbq, mains, pasta, snacks, starters };

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
    res.render('categories', {title: ' Cooking Blog | Categories', categories, food});
  } catch (error) {
    res.status(400).send({message: error.message || "Oopsi, error :("})
  }


}




async function insertDommyRecepiesData(){
  try{
    await Recipe.insertMany([

      {
        "name":"Grilled shrimps with garlic herb butter",
        "desc": ` Step 1
        Place salt, lemon zest, and 3 cloves garlic in bowl of a mortar and pestle. Pound with the pestle until mixture begins to form a paste, about 2 minutes. Add chopped basil, parsley, oregano, and thyme and pound with pestle until mixture begin to come together, about 5 minutes.
        Step 2
        Drizzle about 1 tablespoon of the olive oil into herb mixture. Grind together until mixture begins to form a sauce for marinating, about 1 minute. Pour in the remaining 3 tablespoons olive oil. Stir mixture with a spoon until mixture is thoroughly combined, adding additional olive oil as needed. Mixture should be fairly thick but pourable.
        Step 3
        Place shrimp in a large bowl and mix in about 2/3 of the sauce, reserving 1/3 for serving. Stir until shrimp are evenly coated with the sauce, about 2 minutes. Transfer shrimp to a resealable plastic bag. Refrigerate 2 to 3 hours. Cover and refrigerate remaining sauce.
        Step 4
        Preheat an outdoor grill for high heat and lightly oil the grate.
        Step 5
        Thread shrimp onto skewers (pierce each twice, once through large part of shrimp, once through small part). Place skewers on hot grill. Cook on each side until shrimp are bright pink and opaque and exterior is beginning to caramelize, 2 to 3 minutes per side. Transfer skewers to serving platter.
        Step 6
        Pour remaining sauce into mixing bowl. Whisk in 1 tablespoon olive oil, lemon juice, red pepper flakes, cayenne pepper, salt and black pepper. Spoon sauce over shrimp. Serve with lemon wedges. ,
        Source:   https://www.allrecipes.com/recipe/244245/chef-johns-grilled-garlic-and-herb-shrimp/`,
        "email": "naomi.ninnig@gmail.com", 
        "ingredients": [
        "1 tablespoon olive oil",
        "½ lemon, juiced ",
        "½ teaspoon red pepper flakes",
        "1 pinch cayenne pepper",
        "salt and ground black pepper to taste",
        "1 lemon, cut into wedges",
        ],
        "category": "BBQ & Grill",
        "image": "asian-gf65134d7e_1920.jpg",
      },
           // {
              // "name": "Memphis Pulled Pork",
        // "desc": ` Step 1
        // Spread onion slices and garlic cloves in the bottom of a slow cooker; stir in beef broth, barbeque sauce, brown sugar, cider vinegar, and pepper. Add pork roast.
        // Step 2
        // Cover and cook on Low for 6 to 8 hours. Remove pork from slow cooker. Strain juices and return to the slow cooker. Mix water and cornstarch in a bowl; stir into juices until sauce is thickened. ,
        // Source:    https://www.allrecipes.com/recipe/235365/memphis-pulled-pork/  `,
        // "email": "naomi.ninnig@gmail.com", 
        // "ingredients": [
        // "1 onion, thinly sliced",
        // "6 cloves garlic, peeled",
        // "2 (14 ounce) cans beef broth",
        // "1 (18 ounce) bottle barbeque sauce",
        // "⅓ cup brown sugar",
        // "⅓ cup cider vinegar",
        // "½ teaspoon ground black pepper",
        // "1 (4 pound) Boston butt pork shoulder roast",
        // "2 tablespoons cornstarch",
        // "3 tablespoons water"
        // "name": "Memphis Pulled Pork",
        // "desc": ` Step 1
        // Spread onion slices and garlic cloves in the bottom of a slow cooker; stir in beef broth, barbeque sauce, brown sugar, cider vinegar, and pepper. Add pork roast.
        // Step 2
        // Cover and cook on Low for 6 to 8 hours. Remove pork from slow cooker. Strain juices and return to the slow cooker. Mix water and cornstarch in a bowl; stir into juices until sauce is thickened. ,
        // Source:    https://www.allrecipes.com/recipe/235365/memphis-pulled-pork/  `,
        // "email": "naomi.ninnig@gmail.com", 
        // "ingredients": [
        // "1 onion, thinly sliced",
        // "6 cloves garlic, peeled",
        // "2 (14 ounce) cans beef broth",
        // "1 (18 ounce) bottle barbeque sauce",
        // "⅓ cup brown sugar",
        // "⅓ cup cider vinegar",
        // "½ teaspoon ground black pepper",
        // "1 (4 pound) Boston butt pork shoulder roast",
        // "2 tablespoons cornstarch",
        // "3 tablespoons water"
        // ],
        // "category":"BBQ & Grill ",
        // "image": "hamburger-gc60ea5c77_1920.jpg"
        // }

        // {
        // "name": "Hungarian goulash ",
        // "desc": ` STEP 1
        // Heat up the oil or lard in a pot and braise the chopped onions in it until they get a nice golden brown colour
        // STEP 2
        // Sprinkle the braised onions with paprika powder while strirring them to prevent the paprika from burning.
        // STEP 3
        // Add the beef cubes and and sautee them till they turn white and get a bit of brownish colour as well.
        // STEP 4
        // The meat will probably let out its own juice, let the beef-cubes simmer in it while adding the grated or crushed and chopped garlic (grated garlic has stronger flavour), the ground caraway seed, some salt and ground black pepper, the bayleaf, pour water enough to cover the content of the pan and let it simmer on low heat for a while.
        // STEP 5
        // When the meat is half-cooked (approx. in 1,5 hour, but it can take longer depending on the type and quality of the beef) add the diced carrots and the potatoes, the cellery leaf and some more salt if necessary (vegetables tend to call for more salt). You'll probably have to add some more (2-3 cups) water too.
        // STEP 6
        // When the vegetables and the meat are almost done add the tomatoe cubes and the sliced green peppers. Let it cook on low heat for another few minutes. You can remove the lid of the pan if you want the soup to thicken.
        // STEP 7
        // Hungarian goulash is neither a soup nor a stew, its somewhere in between. Though in Hungary its considered rather to be a soup than a stew.
        // STEP 8
        // The soup is hearty enough without any pasta just serve with some fresh bread  ,
        // Source:    https://www.bbcgoodfood.com/user/433071/recipe/hungarian-goulash  `,
        // "email": "naomi.ninnig@gmail.com", 
        // "ingredients": [
        // "600 g beef sheen or shoulder, or any tender part of the beef cut into 2x2 cm cubes",
        // "2 tablespoons oil or lard",
        // "2 medium onions, chopped",
        // "2 cloves of garlic",
        // "1-2 carrots, diced",
        // "1-2 cellery leafes",
        // "2 medium tomatoes, peeled and chopped, or 1 tbs. tomato paste",
        // "2 fresh green peppers",
        // "2-3 medium potatoes, diced",
        // "1 tablespoon Hungarian paprika powder",
        // "1 teaspoon ground caraway seed",
        // "1 bayleaf",
        // "ground black pepper and salt according to taste"
        // ],
        // "category": "Mains ",
        // "image": "goulash-gc8473bf94_1920.jpg"
        // } 
        // "name": "Spaghetti vongole ",
        // "desc": ` Put a pan of water on to boil. While that’s happening, sort through your cleaned clams and if there are any that aren’t tightly closed, give them a sharp tap. If they don’t close, throw them away. Put a large pan with a lid on a high heat and let it heat up. Finely slice the parsley stalks, then put them to one side and roughly chop the leaves. Peel and chop the garlic, quarter the tomatoes and get your wine ready.
        // Add the pasta to the boiling water with a good pinch of salt and cook according to packet instructions until al dente. About 5 minutes before your pasta is ready, get ready to start cooking – you'll have to be quick about this, so no mucking about! Put 4 generous lugs of extra virgin olive oil into the hot pan and add the garlic, parsley stalks and a good pinch of salt and pepper. Crumble in the dried chilli and add the chopped tomatoes. Stir everything around constantly and just as the garlic starts to colour, tip in the clams and pour in the wine. It will splutter and steam, so give everything a good shake and put the lid on the pan. After about 3 or 4 minutes the clams will start to open, so keep shuffling the pan around until all of them have opened. Take the pan off the heat. Get rid of any clams that haven't opened.
        // By now your pasta should be just about perfect. Drain and add to the pan of clams along with the parsley leaves and an extra drizzle of extra virgin olive oil. Stir or toss for a further minute or two to let the beautiful seashore juices from the clams be absorbed into the pasta. Serve right away. No sane Italian would eat this dish without some fresh hunks of bread to mop up the juices. Beautiful!
        // PS The first time you make this it will be good, but you might find things don't come together exactly at the right time. But don't worry, this dish is all about confidence and the more you make this, the more you'll find the pasta and clams are ready and perfect at the same time. And then it will be great!  ,
        // Source:   https://www.jamieoliver.com/recipes/pasta-recipes/spaghetti-vongole/  `,
        // "email": "naomi.ninnig@gmail.com", 
        // "ingredients": [
        // "1 kg small clams , from sustainable sources, ask your fishmonger, scrubbed clean",
        // "½ a bunch fresh flat-leaf parsley (15g)",
        // "4 cloves garlic",
        // "10 cherry tomatoes",
        // "250 ml white wine",
        // "400 g dried spaghetti",
        // "extra virgin olive oil",
        // "1-2 dried red chillies",
        // ],
        // "category": "Pasta ",
        // "image": "food-gc02eb11a6_1920.jpg"
        // },
        // {
        // "name": "Good old lasagne ",
        // "desc": `   For the Bolognese, trim, peel and finely chop the onions, garlic, carrots and celery, then clean and roughly chop the mushrooms.
        // Pick the thyme and basil leaves, finely chopping the basil stalks, then finely slice the bacon.
        // Heat a good lug of oil in a large casserole pan over a medium heat, add the bacon and fry until golden, then add the onions, garlic, carrots, celery, mushrooms and thyme and cook for around 10 minutes, or until softened and lightly coloured, stirring regularly.
        // Add the minced meat, tinned tomatoes, breaking them up with a wooden spoon, and 1 tin’s worth of of water.
        // Pour in the wine, then add a good pinch of sea salt and black pepper and the basil stalks. Bring to the boil, then reduce the heat to low and simmer with a lid ajar for around 1 hour, stirring occasionally.
        // When the time’s up, remove the lid, turn the heat to high and cook for a further 20 to 30 minutes, or until thickened and reduced, stirring regularly and adding splashes of water, if needed.
        // Meanwhile, fill a large pan with boiling salted water, add a drizzle of oil, then blanch your pasta sheets for 3 to 4 minutes – it’s best to cook them in batches. Drain, then carefully pat dry with kitchen paper and put aside until needed.
        // Preheat the oven to 200°C/400°F/gas 6.
        // For the white sauce, peel and finely slice the onion, then place in a pan over a medium heat with the milk, parsley, a few scrapings of nutmeg and the peppercorns. Gently bring to the boil, then strain into a jug.
        // Melt the butter in pan over a medium-low heat, then mix in the flour adding and stirring in 1 splash of milk at a time until you have a smooth white sauce. Bring to the boil, then simmer for a couple of minutes before removing from the heat. Finely grate and stir through most of the Parmesan, then season to taste.
        // When the time’s up, remove the Bolognese from the heat, tear in and stir through the basil leaves and season to taste, if needed.
        // To assemble the lasagne, spoon a third of the Bolognese into the bottom of an ovenproof dish (25cm x 30cm), then follow with a layer of lasagne sheets and a third of your white sauce. Add another layer of Bolognese and repeat the process twice more, finishing with a layer of white sauce.
        // Finely grate over the remaining Parmesan, drizzle with oil, cover loosely with tin foil and place in the oven for 20 minutes.
        // Remove the tin foil and cook for a further 30 minutes on the grill/fan setting (at the same temperature), or until golden brown and bubbling at the edges. Delicious served with a seasonal green salad.,
        // Source:   https://www.jamieoliver.com/recipes/pork-recipes/good-old-lasagne/   `,
        // "email": "naomi.ninnig@gmail.com", 
        // "ingredients": [
        // "BOLOGNESE:",
        // "2 red onions",
        // "2 cloves of garlic",
        // "2 carrots",
        // "2 sticks of celery",
        // "250 g mushrooms",
        // "½ a bunch of fresh thyme",
        // "1 bunch of fresh basil",
        // "4 rashers of higher-welfare smoked streaky bacon",
        // "250 g lean minced beef",
        // "250 g lean higher-welfare minced pork",
        // "2 x 400 g tins of plum tomatoes",
        // "250 ml red wine",
        // "LASAGNE & WHITE SAUCE:",
        // "300 g dried lasagne sheets",
        // "½ a small red onion",
        // "600 ml semi-skimmed milk",
        // "1 sprig of fresh parsley",
        // "1 whole nutmeg , for grating",
        // "6 black peppercorns",
        // "35 g unsalted butter",
        // "50 g plain flour",
        // "70 g Parmesan cheese",
        // ],
        // "category": "Pasta ",
        // "image": " food-g7cb51e443_1920 "
        // },
        // {
        // "name": "Beef tartare ",
        // "desc": `  Combine ingredients except ciabatta, olive oil and parsley in a large bowl, mix well, season to taste with sea salt and freshly ground black pepper and set aside to come to room temperature (around 1 hour).
        
        // Meanwhile, preheat oven to 180C. Brush both sides of ciabatta slices with olive oil, then bake on an oven tray, turning once, until golden brown (7-8 minutes). Cool briefly.
        
        // Pile tartare onto toasts, scatter with parsley and serve with Dijon mustard. ,
        // Source:    https://www.gourmettraveller.com.au/recipes/browse-all/beef-tartare-12346  `,
        // "email": "naomi.ninnig@gmail.com", 
        // "ingredients": [
        // "1 kg beef eye fillet, cut into 5mm dice",
        // "80 g golden shallots, peeled and very finely chopped",
        // "50 gm small salted capers, rinsed and drained",
        // "35 gm cornichons, finely chopped",
        // "2 tbsp Dijon mustard, plus extra to serve",
        // "1 tbsp tomato sauce",
        // "2 tsp brandy",
        // "1 tsp Worcestershire sauce",
        // "8 anchovy fillets, finely chopped",
        // "2 egg yolks",
        // "Tabasco, to taste",
        // "6 ciabatta slices (about ½cm thick)",
        // "olive oil, for brushing",
        // "coarsely chopped parsley, to serve"
        // ],
        // "category": " Snacks",
        // "image": " cuciana-ge65569178_1920 "
        // },
        // {
        // "name": "Fish & Chips",
        // "desc": `Preheat the oven to 180°C/350°F/gas 4.
        // Peel and slice the potatoes into chips.
        // To make the mushy peas, pick and finely chop the mint leaves. Place the butter in a pan over a medium-low heat, add the peas and mint, pop the lid on and simmer gently for 10 minutes.
        // Add a squeeze of lemon juice and season to taste with sea salt and black pepper – you can either mush the peas up in a food processor, or mash them by hand until stodgy, thick and perfect for dipping your fish into. Keep them warm until needed.
        // Pour the sunflower oil into a deep fat fryer or a large sturdy pan and heat it to 190°C/375°F.
        // Mix ½ a teaspoon of salt and 1 teaspoon of pepper together, then use it to season the fish fillets on both sides – this will help to remove any excess water, making the fish really meaty.
        // Whisk the flour, beer and baking powder together until nice and shiny – the texture should be like semi-whipped double cream (i.e. it should stick to whatever you're coating).
        // Dust each fish fillet in a little of the extra flour, then dip into the batter and allow any excess to drip off. Holding one end, gently lower the fish into the oil one by one, working carefully so you don't get splashed – it will depend on the size of your fryer or pan how many fish you can cook at once.
        // Cook for 4 minutes, or until the fish is cooked through and the batter is golden and crisp, then remove to kitchen paper to drain.
        // Meanwhile, parboil the chips in boiling salted water for 4 to 5 minutes, or until softened but still retaining their shape, then drain and steam dry.
        // When the chips are nice and dry, fry in the oil that the fish were cooked in at 180°C/350°F until golden and crisp.
        // While the chips are frying, transfer the fish from the kitchen paper to a baking tray. Place in the oven for a few minutes to finish cooking – this way they will stay crisp while you finish off the chips.
        // When the chips are done, drain them on kitchen paper, season with salt, and serve with the fish and mushy peas. Other things to have on the table are some crunchy sweet pickled gherkins, some pickled onions (if your other half isn't around!) – and pickled chillies are good, too. Then you want to douse it all with some cheap malt vinegar and nothing other than Heinz tomato ketchup.   ,
        // Source:   https://www.jamieoliver.com/recipes/fish-recipes/fish-chips-and-mushy-peas/   `,
        // "email": "naomi.ninnig@gmail.com", 
        // "ingredients": [
        // "900 g potatoes",
        // "sunflower oil for deep-frying",
        // "225 g white fish fillets , skin off, pin-boned, from sustainable sources",
        // "225 g plain flour , plus extra for dusting",
        // "285 ml cold beer",
        // "3 heaped teaspoons baking powder"
        // ],
        // "category": " Snacks",
        // "image": "food-g61378f995_1920 "
        // },
        // {
        // "name": "Thai-style mussels ",
        // "desc": `  Wash the mussels thoroughly, discarding any that aren’t tightly closed.
        // Trim and finely slice the spring onions, peel and finely slice the garlic. Pick and set aside the coriander leaves, then finely chop the stalks. Cut the lemongrass into 4 pieces, then finely slice the chilli.
        // In a wide saucepan, heat a little groundnut oil and soften the spring onion, garlic, coriander stalks, lemongrass and most of the red chilli for around 5 minutes.
        // Add the coconut milk and fish sauce and bring to the boil, then add the mussels and cover the pan.
        // Steam the mussels for 5 minutes, or until they've all opened and are cooked. Discard any unopened mussels.
        // Finish with a squeeze of lime juice, then sprinkle with coriander leaves and the remaining chilli to serve. ,
        // Source:   https://www.jamieoliver.com/recipes/seafood-recipes/thai-style-mussels/   `,
        // "email": "naomi.ninnig@gmail.com", 
        // "ingredients": [
        // "1 kg mussels , debearded, from sustainable sources",
        // "4 spring onions",
        // "2 cloves of garlic",
        // "½ a bunch of fresh coriander",
        // "1 stick of lemongrass",
        // "1 fresh red chilli",
        // "groundnut oil",
        // "1 x 400 ml tin of reduced fat coconut milk",
        // "1 tablespoon fish sauce",
        // "1 lime"
        // ],
        // "category": " Startes",
        // "image": "mussels-ge531b2b7c_1920 "
        // },
        // {
        // "name": "Tomato soup ",
        // "desc": `  Peel and roughly slice the carrots, slice the celery, and peel and roughly chop the onions. Peel and slice the garlic.
        // Heat 2 tablespoons of oil in a large pan over a medium heat, add all the prepped ingredients, then cook with lid ajar for 10 to 15 minutes, or until softened.
        // Crumble the stock cubes into a jug, cover with1.5 litres of boiling water, and stir until dissolved.
        // Add the stock to the veg pan with tinned and fresh whole tomatoes, including the green stalks that may still be attached to some of them (these give an amazing flavour – trust me!).
        // Give it a good stir and bring to the boil, then reduce to a simmer for 10 minutes with the lid on. Meanwhile, pick your basil leaves.
        // Remove the pan from the heat. Season to taste with sea salt and black pepper, then stir through the basil leaves.
        // Using a stick blender or liquidizer, pulse the soup until smooth. Taste and check the seasoning, then serve. ,
        // Source:    https://www.jamieoliver.com/recipes/vegetables-recipes/tomato-soup/  `,
        // "email": "naomi.ninnig@gmail.com", 
        // "ingredients": [
        // "2 carrots",
        // "2 sticks of celery",
        // "2 medium onions",
        // "2 cloves of garlic",
        // "olive oil",
        // "2 organic reduced-salt chicken or vegetable stock cubes",
        // "2 x 400 g tins of quality plum tomatoes",
        // "6 large ripe tomatoes",
        // "½ a bunch of fresh basil (15g)"
        // ],
        // "category": " Starters",
        // "image": "soup-g8f76f1f33_1920 "
        // }
    ]);
  }catch(error) {
    console.log('err', + error);
  }
}
insertDommyRecepiesData();




