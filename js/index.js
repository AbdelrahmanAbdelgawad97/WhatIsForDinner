


var reviewNumber = document.getElementById("review-number");
var ratNumber = document.getElementById("rat-number");
var preparTime = document.getElementById("preparation-time");
var cookTime = document.getElementById("cooking-time");
var saveTime = document.getElementById("saving-people");
var levelOfFood = document.getElementById("level");
var country = document.getElementById("country");
var foodName = document.getElementById("food-name");
var foodDescription = document.getElementById("food-desc");
var bgImage = document.getElementById("left-part-image");

var alert = document.getElementById("alert");

var stepsOfPreparation = document.getElementById("pills-home");
var instructions = document.getElementById("pills-profile");

var calories = document.getElementById("calories");
var carbohydrates = document.getElementById("carbohydrates");
var fiber = document.getElementById("fiber");
var protein = document.getElementById("protein");
var fat = document.getElementById("fat");
var sodium = document.getElementById("sodium");

var chefTips = document.getElementById("pills-chef");




var meals = 
[
    {
        ratNumber: "4.6",
        reviewNumber: "(289 reviews)",
        image: "images/shredded-beef-1.jpg",
        preparationTime: "20 min",
        cookTime: "240 min",
        NumberOfPeople: "4 people",
        level: "Easy",
        originCountr: "Amirican",
        foodName: "BBQ Pulled beef",
        foodDesc: "Slow-cooked tender pork in smoky barbecue sauce",
        longTimeOrNo: true,
        stepsRecipt: ["1kg beef shoulder" , "1 cup BBQ sauce" , "1/2 cup apple cider vinegar" , "2 tablespoons brown sugar" , "1 tablespoon paprika" , "1 tablespoon garlic powder" , "Burger buns" , "Coleslaw for serving"],
        instruction: [  "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
                        "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
                        "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
                        "Remove pork and shred with two forks. Discard excess fat.",
                        "Return shredded pork to slow cooker, mix with BBQ sauce."],
        calories: "520 kcal",
        carbohydrates: "52g",
        fiber: "3g",
        protein: "48g",
        fat: "22g",
        sodium: "1180mg",
        tipChef: ["Use beef shoulder for best results - it stays moist", "Let beef rest before shredding for juicier meat", "Make your own BBQ sauce for better flavor" ,"Leftovers freeze well for up to 3 months"],
    
    },
    {
        ratNumber: "4.9",
        reviewNumber: "(187 reviews)",
        image: "images/Honey-Garlic-Salmon-glaze-recipe.webp",
        preparationTime: "10 min",
        cookTime: "15 min",
        NumberOfPeople: "2 people",
        level: "Easy",
        originCountr: "Seafood",
        foodName: "Honey Garlic Salmon",
        foodDesc: "Pan-seared salmon with a sweet and savory glaze",
        longTimeOrNo: false,
        stepsRecipt: ["2 salmon fillets (6oz each)" , "3 tablespoons honey" , "2 tablespoons soy sauce" , "4 cloves garlic, minced" , "1 tablespoon olive oil" , "1 teaspoon fresh ginger, grated" , "Sesame seeds for garnish" , "Green onions, sliced"],
        instruction: [  "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
                        "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
                        "Heat olive oil in a large skillet over medium-high heat.",
                        "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
                        "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
                        "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."],
        calories: "380 kcal",
        carbohydrates: "28g",
        fiber: "0g",
        protein: "35g",
        fat: "14g",
        sodium: "720mg",
        tipChef: ["Don't overcook salmon - it should be slightly pink in the center", "Use wild-caught salmon for best flavor and nutrition", "Let the sauce caramelize slightly for deeper flavor" ,"Pair with steamed broccoli or asparagus for a complete meal"],
    },
    {
        ratNumber: "4.8",
        reviewNumber: "(356 reviews)",
        image: "images/shrimp-scampi-recipe-2.jpg",
        preparationTime: "10 min",
        cookTime: "15 min",
        NumberOfPeople: "2 people",
        level: "Easy",
        originCountr: "Seafood",
        foodName: "Shrimp Scampi",
        foodDesc: "Garlicky shrimp in white wine butter sauce",
        longTimeOrNo: false,
        stepsRecipt: [
        "400g large shrimp, peeled",
        "300g linguine pasta",
        "6 cloves garlic, minced",
        "1/2 cup white wine",
        "4 tablespoons butter",
        "2 tablespoons olive oil",
        "Fresh parsley, chopped",
        "Lemon juice and zest",
        "Red pepper flakes"
        ],
        instruction: [
            "Cook linguine according to package directions. Reserve 1 cup pasta water.",
            "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
            "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
            "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
            "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
            "Garnish with parsley, lemon zest, and serve immediately."
        ],

        calories: "520 kcal",
        carbohydrates: "54g",
        fiber: "3g",
        protein: "36g",
        fat: "18g",
        sodium: "620mg",
        tipChef: [
        "Don't overcook salmon - it should be slightly pink in the center",
        "Use wild-caught salmon for best flavor and nutrition",
        "Let the sauce caramelize slightly for deeper flavor",
        "Pair with steamed broccoli or asparagus for a complete meal"
        ]
    },
    {
        ratNumber: "4.8",
        reviewNumber: "(234 reviews)",
        image: "images/Bacon-Carbonara-Pasta-4.jpg",
        preparationTime: "15 min",
        cookTime: "20 min",
        NumberOfPeople: "4 people",
        level: "Easy",
        originCountr: "Italian",
        foodName: "Creamy Spaghetti Carbonara",
        foodDesc: "A classic Italian pasta dish with eggs, cheese, and pancetta",
        longTimeOrNo: false,
        stepsRecipt: [
        "400g spaghetti pasta",
        "200g pancetta or guanciale, diced",
        "4 large eggs",
        "100g Pecorino Romano cheese, grated",
        "50g Parmesan cheese, grated",
        "Freshly ground black pepper",
        "Salt for pasta water"
        ],
        instruction: [
        "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
        "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
        "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
        "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
        "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
        "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"
        ],


        calories: "520 kcal",
        carbohydrates: "62g",
        fiber: "3g",
        protein: "28g",
        fat: "18g",
        sodium: "680mg",
        tipChef: [
        "Use room temperature eggs for a smoother sauce consistency",
        "Work quickly when mixing eggs with hot pasta to avoid scrambling",
        "Reserve extra pasta water - it's the secret to perfect creaminess",
        "Freshly grated cheese makes all the difference in flavor",
        "Never add cream - authentic carbonara is made with eggs only"
        ]
    },
    {
        ratNumber: "4.8",
        reviewNumber: "(445 reviews)",
        image: "images/Pad Thai.jpg",
        preparationTime: "20 min",
        cookTime: "15 min",
        NumberOfPeople: "2 people",
        level: "Intermediate",
        originCountr: "Asian",
        foodName: "Pad Thai",
        foodDesc: "Popular Thai stir-fried noodles with shrimp and peanuts",
        longTimeOrNo: false,
        stepsRecipt: [
        "200g rice noodles",
        "200g shrimp, peeled",
        "2 eggs",
        "3 tablespoons tamarind paste",
        "2 tablespoons fish sauce",
        "1 tablespoon palm sugar",
        "Bean sprouts",
        "Crushed peanuts",
        "Lime wedges and cilantro"
        ],

        instruction: [
        "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
        "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
        "Heat wok over high heat. Scramble eggs and set aside.",
        "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
        "Add scrambled eggs and bean sprouts. Toss everything together.",
        "Serve topped with crushed peanuts, lime wedges, and cilantro."
        ],

        calories: "540 kcal",
        carbohydrates: "62g",
        fiber: "4g",
        protein: "32g",
        fat: "16g",
        sodium: "1120mg",
        tipChef: [
        "Don't oversoak noodles or they'll be mushy",
        "Cook on high heat for authentic wok flavor",
        "Balance sweet, sour, and salty flavors",
        "Prepare all ingredients before starting to cook"
        ]
    },
    {
        ratNumber: "4.7",
        reviewNumber: "(312 reviews)",
        image: "images/Thai-green-chicken-curry-3-500x500.jpg",
        preparationTime: "15 min",
        cookTime: "25 min",
        NumberOfPeople: "4 people",
        level: "Intermediate",
        originCountr: "Asian",
        foodName: "Thai Green Curry",
        foodDesc: "Vibrant and aromatic curry with vegetables and coconut milk",
        longTimeOrNo: false,
        stepsRecipt: [
        "2 tablespoons green curry paste",
        "400ml coconut milk",
        "300g chicken breast, sliced",
        "1 red bell pepper, sliced",
        "100g green beans",
        "1 eggplant, cubed",
        "2 tablespoons fish sauce",
        "1 tablespoon palm sugar",
        "Fresh Thai basil leaves"
        ],

        instruction: [
        "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
        "Add half the coconut milk and stir to combine with the curry paste.",
        "Add sliced chicken and cook until no longer pink, about 5 minutes.",
        "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
        "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
        "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
        "Try Another Recipe"
        ],


        calories: "420 kcal",
        carbohydrates: "22g",
        fiber: "5g",
        protein: "26g",
        fat: "26g",
        sodium: "890mg",
        tipChef: [
        "Adjust spice level by using more or less curry paste",
        "Add vegetables in stages based on cooking time needed",
        "Fresh Thai basil is essential for authentic flavor",
        "Use full-fat coconut milk for richest, creamiest sauce"
        ]
    },
    {
        ratNumber: "4.6",
        reviewNumber: "(289 reviews)",
        image: "images/indian-vegetable-curry-recipe-2.jpg",
        preparationTime: "20 min",
        cookTime: "30 min",
        NumberOfPeople: "4 people",
        level: "Easy",
        originCountr: "Asian",
        foodName: "Vegetable Curry",
        foodDesc: "Hearty vegetarian curry with coconut milk",
        longTimeOrNo: true,
        stepsRecipt: [
        "2 potatoes, cubed",
        "1 cauliflower, florets",
        "2 carrots, sliced",
        "1 can chickpeas",
        "400ml coconut milk",
        "3 tablespoons curry powder",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "Fresh spinach"
        ],

        instruction: [
        "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
        "Add potatoes and carrots, cook for 5 minutes.",
        "Pour in coconut milk and 1 cup water. Bring to simmer.",
        "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
        "Stir in fresh spinach and cook until wilted.",
        "Serve hot over basmati rice or with naan bread"
        ],


        calories: "380 kcal",
        carbohydrates: "48g",
        fiber: "12g",
        protein: "14g",
        fat: "16g",
        sodium: "480mg",

        tipChef: [
        "Add vegetables in order of cooking time needed",
        "Adjust curry powder amount to taste",
        "Use full-fat coconut milk for creamier curry",
        "Add protein like tofu or paneer if desired"
        ],
    },
    {
        ratNumber: "4.5",
        reviewNumber: "(156 reviews)",
        image: "images/mediterranean-quinoa-bowl_web-3.webp",
        preparationTime: "20 min",
        cookTime: "35 min",
        NumberOfPeople: "2 people",
        level: "Easy",
        originCountr: "Mediterranean",
        foodName: "Mediterranean Quinoa Bowl",
        foodDesc: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        longTimeOrNo: true,
        stepsRecipt: [
        "1 cup quinoa",
        "Cherry tomatoes, halved",
        "Cucumber, diced",
        "Red onion, sliced",
        "Kalamata olives",
        "Feta cheese, crumbled",
        "Fresh parsley",
        "Tahini dressing"
        ],

        instruction: [
        "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
        "While quinoa cooks, prepare all vegetables and set aside.",
        "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
        "Fluff cooked quinoa with a fork and let cool slightly.",
        "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
        "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
        ],



        calories: "480 kcal",
        carbohydrates: "58g",
        fiber: "10g",
        protein: "18g",
        fat: "20g",
        sodium: "540mg",

        tipChef: [
        "Rinse quinoa well to remove bitter coating",
        "Let quinoa cool before adding fresh ingredients",
        "Make extra tahini dressing - it keeps well in the fridge",
        "Add grilled chicken or chickpeas for extra protein"
        ],

    },
    {
        ratNumber: "4.8",
        reviewNumber: "(234 reviews)",
        image: "images/Greek-Moussaka_3-re-edited-SQ.webp",
        preparationTime: "30 min",
        cookTime: "60 min",
        NumberOfPeople: "4 people",
        level: "Intermediate",
        originCountr: "Mediterranean",
        foodName: "Greek Moussaka",
        foodDesc: "Traditional layered eggplant casserole with lamb",
        longTimeOrNo: true,

        stepsRecipt: [
        "3 large eggplants, sliced",
        "500g ground lamb",
        "400g canned tomatoes",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "500ml béchamel sauce",
        "100g parmesan cheese",
        "Cinnamon and oregano",
        "Olive oil",
        "Try Another Recipe"
        ],

        instruction: [
        "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
        "Brush eggplant slices with olive oil, grill or bake until softened.",
        "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
        "Preheat oven to 180°C (350°F).",
        "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
        "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
        "Try Another Recipe"
        ],

        calories: "580 kcal",
        carbohydrates: "32g",
        fiber: "8g",
        protein: "36g",
        fat: "32g",
        sodium: "820mg",

        tipChef: [
        "Salt eggplant to remove bitterness",
        "Don't skip the resting time - it helps set the layers",
        "Use ground beef if lamb is unavailable",
        "Make ahead and reheat for easier serving"
        ],

    },
    {
        ratNumber: "4.9",
        reviewNumber: "(478 reviews)",
        image: "images/lasagna-bolognese-recipe-1x1-1200x1200-A.jpg",
        preparationTime: "30 min",
        cookTime: "90 min",
        NumberOfPeople: "4 people",
        level: "Intermediate",
        originCountr: "Italian",
        foodName: "Lasagna Bolognese",
        foodDesc: "Layered Italian pasta with rich meat sauce and béchamel",
        longTimeOrNo: true,

        stepsRecipt: [
        "12 lasagna sheets",
        "500g ground beef",
        "400g canned tomatoes",
        "1 onion, diced",
        "2 carrots, diced",
        "500ml béchamel sauce",
        "200g mozzarella, grated",
        "100g parmesan cheese",
        "Fresh basil"
        ],

        instruction: [
        "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
        "Cook lasagna sheets according to package directions. Drain and set aside.",
        "Preheat oven to 180°C (350°F).",
        "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
        "Top final layer with béchamel, mozzarella, and parmesan cheese.",
        "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."
        ],


        calories: "680 kcal",
        carbohydrates: "58g",
        fiber: "6g",
        protein: "42g",
        fat: "28g",
        sodium: "920mg",

        tipChef: [
        "Make bolognese sauce a day ahead for better flavor",
        "Don't skip the resting time after baking",
        "Use fresh pasta sheets for best texture",
        "Freeze leftovers in individual portions"
        ],


    },
    {
        ratNumber: "4.6",
        reviewNumber: "(421 reviews)",
        image: "images/ClassicCheeseBurger_8.webp",
        preparationTime: "15 min",
        cookTime: "20 min",
        NumberOfPeople: "4 people",
        level: "Easy",
        originCountr: "American",
        foodName: "Classic Beef Burger",
        foodDesc: "Juicy homemade burger with all the fixings",
        longTimeOrNo: true,

        stepsRecipt: [
        "500g ground beef (80/20)",
        "4 burger buns",
        "4 slices cheddar cheese",
        "Lettuce leaves",
        "Tomato slices",
        "Red onion, sliced",
        "Pickles",
        "Burger sauce or condiments"
        ],


        instruction: [
        "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
        "Season patties generously with salt and pepper on both sides.",
        "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
        "Add cheese slices in the last minute of cooking and cover to melt.",
        "Toast burger buns lightly on the grill or in a pan.",
        "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."
        ],

        calories: "650 kcal",
        carbohydrates: "42g",
        fiber: "2g",
        protein: "38g",
        fat: "35g",
        sodium: "920mg",

        tipChef: [
            "Don't press down on burgers while cooking to keep them juicy",
            "Make an indent in the center to prevent burgers from puffing up",
            "Let patties rest for 2-3 minutes before serving",
            "Toast buns for better texture and flavor"
        ],
    },
    {
        ratNumber: "4.7",
        reviewNumber: "(389 reviews)",
        image: "images/Chicken-Tikka-Masala_0-SQ.webp",
        preparationTime: "20 min",
        cookTime: "30 min",
        NumberOfPeople: "4 people",
        level: "Intermediate",
        originCountr: "Asian",
        foodName: "Chicken Tikka Masala",
        foodDesc: "Rich and creamy Indian curry with tender chicken pieces",
        longTimeOrNo: true,

        stepsRecipt: [
            "600g chicken breast, cubed",
            "1 cup plain yogurt",
            "2 tablespoons tikka masala paste",
            "400ml coconut cream",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "2 tablespoons grated ginger",
            "400g canned tomatoes",
            "Fresh cilantro for garnish"
        ],

        instruction: [
            "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
            "Heat oil in a large pan and cook the marinated chicken until browned. Remove and set aside.",
            "In the same pan, sauté onion until soft. Add garlic and ginger and cook for 1 minute.",
            "Add the remaining tikka paste and canned tomatoes, then simmer for 10 minutes.",
            "Stir in coconut cream and the remaining yogurt, then return the chicken to the pan.",
            "Simmer for 15 minutes until the sauce thickens. Garnish with cilantro and serve with rice."
        ],

        calories: "450 kcal",
        carbohydrates: "24g",
        fiber: "4g",
        protein: "38g",
        fat: "22g",
        sodium: "760mg",

        tipChef: [
            "Marinate chicken overnight for deeper flavor",
            "Use full-fat coconut cream for the richest sauce",
            "Adjust spice level by varying the amount of tikka paste",
            "Serve with naan bread and basmati rice"
        ],

    },
    {
        ratNumber: "4.7",
        reviewNumber: "(367 reviews)",
        image: "images/chicken-teriyaki-bowls4.jpg",
        preparationTime: "15 min",
        cookTime: "20 min",
        NumberOfPeople: "2 people",
        level: "Easy",
        originCountr: "Asian",
        foodName: "Teriyaki Chicken Bowl",
        foodDesc: "Sweet and savory chicken over rice with vegetables",
        longTimeOrNo: false,

        stepsRecipt: [
            "400g chicken thighs, sliced",
            "1/2 cup teriyaki sauce",
            "2 cups cooked rice",
            "1 broccoli head, cut into florets",
            "1 carrot, julienned",
            "Sesame seeds",
            "Green onions, sliced",
            "1 tablespoon sesame oil"
        ],


        instruction: [
            "Heat sesame oil in a pan and cook the chicken until browned on all sides.",
            "Add teriyaki sauce to the chicken and simmer for 5 minutes until the sauce thickens.",
            "Steam the broccoli and carrots until tender-crisp.",
            "Divide the cooked rice between serving bowls.",
            "Top each bowl with teriyaki chicken and the steamed vegetables."
        ],


        calories: "540 kcal",
        carbohydrates: "58g",
        fiber: "4g",
        protein: "42g",
        fat: "14g",
        sodium: "1240mg",

        tipChef: [
            "Use chicken thighs for juicier meat",
            "Make homemade teriyaki sauce for better flavor control",
            "Add edamame for extra protein",
            "Meal prep by cooking rice and chicken ahead"
        ]


    },
    {
        ratNumber: "4.7",
        reviewNumber: "(267 reviews)",
        image: "images/Simply-Recipes-French-Onion-Soup-LEAD-2-757941da129647dc90e490ed72b3807c.jpg",
        preparationTime: "15 min",
        cookTime: "60 min",
        NumberOfPeople: "4 people",
        level: "Intermediate",
        originCountr: "Mediterranean",
        foodName: "French Onion Soup",
        foodDesc: "Rich beef broth with caramelized onions and melted cheese",
        longTimeOrNo: true,

        stepsRecipt: [
            "4 large onions, thinly sliced",
            "4 tablespoons butter",
            "1 liter beef broth",
            "1/2 cup white wine",
            "2 bay leaves",
            "Fresh thyme",
            "Baguette slices",
            "200g Gruyère cheese, grated"
        ],

        instruction: [
            "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
            "Add white wine and deglaze the pot, scraping up the brown bits.",
            "Pour in the beef broth, then add bay leaves and thyme. Simmer for 20 minutes.",
            "Meanwhile, toast the baguette slices until golden.",
            "Ladle the soup into oven-safe bowls, then top with the toasted bread and grated cheese.",
            "Broil for 3–5 minutes until the cheese is melted and bubbly. Serve hot."
        ],



        calories: "380 kcal",
        carbohydrates: "36g",
        fiber: "4g",
        protein: "18g",
        fat: "18g",
        sodium: "980mg",

        tipChef: [
            "Patience is key – don't rush the onion caramelization",
            "Use good quality beef broth for the best flavor",
            "Gruyère can be substituted with Swiss cheese",
            "Watch carefully when broiling to avoid burning"
        ]

    },
    {
        ratNumber: "4.4",
        reviewNumber: "(189 reviews)",
        image: "images/Avocado-Caesar-Salad-FI.jpg",
        preparationTime: "15 min",
        cookTime: "0 min",
        NumberOfPeople: "2 people",
        level: "Easy",
        originCountr: "Mediterranean",
        foodName: "Caesar Salad",
        foodDesc: "Classic salad with crispy romaine and creamy dressing",
        longTimeOrNo: false,

        stepsRecipt: [
            "1 large romaine lettuce",
            "1/2 cup Caesar dressing",
            "1/2 cup parmesan cheese, shaved",
            "1 cup croutons",
            "2 anchovy fillets (optional)",
            "Lemon wedges",
            "Black pepper"
        ],


        instruction: [
            "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
            "Place lettuce in a large salad bowl.",
            "Add Caesar dressing and toss until evenly coated.",
            "Add croutons and half the parmesan cheese. Toss gently.",
            "Top with remaining parmesan shavings and anchovies if using.",
            "Serve immediately with lemon wedges and fresh black pepper."
        ],

        calories: "320 kcal",
        carbohydrates: "18g",
        fiber: "3g",
        protein: "12g",
        fat: "22g",
        sodium: "680mg",

        tipChef: [
            "Use cold, crisp lettuce for best texture",
            "Make homemade croutons for better flavor",
            "Add grilled chicken for a complete meal",
            "Don't dress salad until ready to serve"
        ]


    },
    {
        ratNumber: "4.6",
        reviewNumber: "(278 reviews)",
        image: "images/shredded-beef-tacos-3.jpg",
        preparationTime: "15 min",
        cookTime: "20 min",
        NumberOfPeople: "4 people",
        level: "Easy",
        originCountr: "American",
        foodName: "Beef Tacos",
        foodDesc: "Flavorful Mexican tacos with seasoned ground beef",
        longTimeOrNo: false,

        stepsRecipt: [
            "500g ground beef",
            "8 taco shells",
            "1 onion, diced",
            "2 tablespoons taco seasoning",
            "Shredded lettuce",
            "Diced tomatoes",
            "Shredded cheddar cheese",
            "Sour cream",
            "Salsa"
        ],

        instruction: [
            "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
            "Add diced onion and cook until softened, about 5 minutes.",
            "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
            "Warm taco shells according to package directions.",
            "Fill each shell with seasoned beef.",
            "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."
        ],


        calories: "420 kcal",
        carbohydrates: "32g",
        fiber: "4g",
        protein: "26g",
        fat: "20g",
        sodium: "780mg",

        tipChef: [
            "Drain excess fat from beef for healthier tacos",
            "Warm shells in oven for better texture",
            "Prepare all toppings before cooking beef",
            "Use ground turkey for a lighter option"
        ]



    },
    {
        ratNumber: "4.5",
        reviewNumber: "(324 reviews)",
        image: "images/chicken-stir-fry-6-2.jpg",
        preparationTime: "15 min",
        cookTime: "15 min",
        NumberOfPeople: "4 people",
        level: "Easy",
        originCountr: "Asian",
        foodName: "Chicken Stir-Fry",
        foodDesc: "Quick and healthy stir-fry with colorful vegetables",
        longTimeOrNo: false,

        stepsRecipt: [
            "500g chicken breast, sliced",
            "2 bell peppers, sliced",
            "1 broccoli head, cut into florets",
            "2 carrots, julienned",
            "3 tablespoons soy sauce",
            "2 tablespoons oyster sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic, minced",
            "Fresh ginger, grated"
        ],


        instruction: [
            "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
            "Heat wok over high heat with oil. Cook chicken until golden, then remove and set aside.",
            "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
            "Add vegetables, starting with the hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
            "Return chicken to the wok, add bell peppers and sauce. Toss for 2 minutes.",
            "Serve immediately over steamed rice or noodles."
        ],



        calories: "320 kcal",
        carbohydrates: "18g",
        fiber: "5g",
        protein: "34g",
        fat: "12g",
        sodium: "840mg",

        tipChef: [
            "Cut all ingredients before starting to cook",
            "Keep heat high for authentic stir-fry texture",
            "Don't overcrowd the wok or vegetables will steam",
            "Add cashews or peanuts for extra crunch"
        ]

    },
    {
        ratNumber: "4.9",
        reviewNumber: "(512 reviews)",
        image: "images/pizzamargherita1.jpg",
        preparationTime: "90 min",
        cookTime: "12 min",
        NumberOfPeople: "2 people",
        level: "Intermediate",
        originCountr: "Italian",
        foodName: "Margherita Pizza",
        foodDesc: "Classic Italian pizza with fresh mozzarella and basil",
        longTimeOrNo: true,

        stepsRecipt: [
            "300g pizza dough",
            "200g crushed tomatoes",
            "250g fresh mozzarella",
            "Fresh basil leaves",
            "2 tablespoons olive oil",
            "2 cloves garlic, minced",
            "Salt and pepper to taste",
            "Parmesan cheese for topping"
        ],



        instruction: [
            "Let pizza dough come to room temperature and rest for 1 hour.",
            "Preheat oven to maximum temperature (usually 250°C/480°F).",
            "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
            "Roll out dough on a floured surface to desired thickness.",
            "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
            "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."
        ],




        calories: "580 kcal",
        carbohydrates: "68g",
        fiber: "4g",
        protein: "24g",
        fat: "22g",
        sodium: "920mg",

        tipChef: [
            "Use a pizza stone for crispier crust",
            "Don't overload with toppings - less is more",
            "Add basil after baking to keep it fresh",
            "Let dough rest properly for best texture"
        ]


    },
];




window.onload = function () {

    displayContent();
}

function displayContent()
{
    var singMeal = meals[Math.floor(Math.random()*meals.length)];
    window.localStorage.setItem("meal",JSON.stringify(singMeal));
    var meal = JSON.parse(window.localStorage.getItem("meal"));

    var stepsRecipt = "";
    var instructionsFood = "";
    var chefTipsHelpfule = "";
    
    reviewNumber.innerHTML = meal.reviewNumber;
    ratNumber.innerHTML = meal.ratNumber;
    preparTime.innerHTML = meal.preparationTime;
    cookTime.innerHTML = meal.cookTime;
    saveTime.innerHTML = meal.NumberOfPeople;
    levelOfFood.innerHTML = meal.level;
    country.innerHTML = meal.originCountr;
    foodName.innerHTML = meal.foodName;
    foodDescription.innerHTML = meal.foodDesc;
    calories.innerHTML = meal.calories;
    carbohydrates.innerHTML = meal.carbohydrates;
    fiber.innerHTML = meal.fiber;
    protein.innerHTML = meal.protein;
    fat.innerHTML = meal.fat;
    sodium.innerHTML = meal.sodium;

    bgImage.style.backgroundImage = `url('${meal.image}')`;
    bgImage.style.backgroundSize = "cover";
    bgImage.style.backgroundRepeat = "no-repeat";

    for(var i=0; i < meal.stepsRecipt.length ; i++)
    {
        stepsRecipt += `
                        <div id="steps-recipt" class="steps-recipt d-flex align-items-center">
                            <p class="number-ingrediant">${i+1}</p>
                            <p class="descript">${meal.stepsRecipt[i]}</p>
                        </div>
        `
    }
    stepsOfPreparation.innerHTML = stepsRecipt;

    for(var i=0; i < meal.instruction.length ; i++)
    {
        instructionsFood += `
                        <div class="instruction d-flex align-items-center">
                            <p class="instruction-number ">${i+1}</p>
                            <p class="color-heavy-gray lh-lg">${meal.instruction[i]}</p>
                        </div>
        `
    }
    instructions.innerHTML = instructionsFood;

    for(var i=0; i < meal.tipChef.length ; i++)
    {
        chefTipsHelpfule += `
                        <div id="chef-tip" class="chef-tips rounded-3 p-2 d-flex align-items-center justify-content-start mb-4">
                            <i class="fa-solid fa-circle-check me-2"></i>
                            <p class="pt-2"> ${meal.tipChef[i]}</p>
                        </div>
        `
    }
    chefTips.innerHTML = chefTipsHelpfule;

    if(meal.longTimeOrNo) 
    {
        alert.classList.add("d-flex");
        alert.classList.remove("d-none");
    } else {
        alert.classList.add("d-none");
        alert.classList.remove("d-flex");
    }
}

function randomeMeal() 
{
   displayContent()
}