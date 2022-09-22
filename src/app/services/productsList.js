const productsList = [
    {
        "id": 1,
        "title": "Brown eggs",
        "description": "Raw organic brown eggs in a basket",
        "type": "dairy",
        "price": 28.1,
        "rating": 4,
        "imageUrl": "0.jpeg"
    },
    {
        "id": 2,
        "title": "Sweet fresh stawberry",
        "description": "Sweet fresh stawberry on the wooden table",
        "type": "fruit",
        "price": 29.45,
        "rating": 4,
        "imageUrl": "1.jpeg"
    },
    {
        "id": 3,
        "title": "Asparagus",
        "description": "Asparagus with ham on the wooden table",
        "type": "vegetable",
        "price": 18.95,
        "rating": 3,
        "imageUrl": "2.jpeg"
    },
    {
        "id": 4,
        "title": "Green smoothie",
        "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
        "type": "dairy",
        "price": 17.68,
        "rating": 4,
        "imageUrl": "3.jpeg"
    },
    {
        "id": 5,
        "title": "Raw legums",
        "description": "Raw legums on the wooden table",
        "type": "vegetable",
        "price": 17.11,
        "rating": 2,
        "imageUrl": "4.jpeg"
    },
    {
        "id": 6,
        "title": "Baking cake",
        "description": "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
        "type": "dairy",
        "price": 11.14,
        "rating": 4,
        "imageUrl": "5.jpeg"
    },
    {
        "id": 7,
        "title": "Pesto with basil",
        "description": "Italian traditional pesto with basil, chesse and oil",
        "type": "vegetable",
        "price": 18.19,
        "rating": 2,
        "imageUrl": "6.jpeg"
    },
    {
        "id": 8,
        "title": "Hazelnut in black ceramic bowl",
        "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
        "type": "vegetable",
        "price": 27.35,
        "rating": 0,
        "imageUrl": "7.jpeg"
    },
    {
        "id": 9,
        "title": "Fresh stawberry",
        "description": "Sweet fresh stawberry on the wooden table",
        "type": "fruit",
        "price": 28.59,
        "rating": 4,
        "imageUrl": "8.jpeg"
    },
    {
        "id": 10,
        "title": "Lemon and salt",
        "description": "Rosemary, lemon and salt on the table",
        "type": "fruit",
        "price": 15.79,
        "rating": 5,
        "imageUrl": "9.jpeg"
    },
    {
        "id": 11,
        "title": "Homemade bread",
        "description": "Homemade bread",
        "type": "bakery",
        "price": 17.48,
        "rating": 3,
        "imageUrl": "10.jpeg"
    },
    {
        "id": 12,
        "title": "Legums",
        "description": "Cooked legums on the wooden table",
        "type": "vegetable",
        "price": 14.77,
        "rating": 0,
        "imageUrl": "11.jpeg"
    },
    {
        "id": 13,
        "title": "Fresh tomato",
        "description": "Fresh tomato juice with basil",
        "type": "vegetable",
        "price": 16.3,
        "rating": 2,
        "imageUrl": "12.jpeg"
    },
    {
        "id": 14,
        "title": "Healthy breakfast",
        "description": "Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",
        "type": "fruit",
        "price": 13.02,
        "rating": 2,
        "imageUrl": "13.jpeg"
    },
    {
        "id": 15,
        "title": "Green beans",
        "description": "Raw organic green beans ready to eat",
        "type": "vegetable",
        "price": 28.79,
        "rating": 1,
        "imageUrl": "14.jpeg"
    },
    {
        "id": 16,
        "title": "Baked stuffed portabello mushrooms",
        "description": "Homemade baked stuffed portabello mushrooms with spinach and cheese",
        "type": "bakery",
        "price": 20.31,
        "rating": 1,
        "imageUrl": "15.jpeg"
    },
    {
        "id": 17,
        "title": "Strawberry jelly",
        "description": "Homemade organic strawberry jelly in a jar",
        "type": "fruit",
        "price": 14.18,
        "rating": 1,
        "imageUrl": "16.jpeg"
    },
    {
        "id": 18,
        "title": "Pears juice",
        "description": "Fresh pears juice on the wooden table",
        "type": "fruit",
        "price": 19.49,
        "rating": 4,
        "imageUrl": "17.jpeg"
    },
    {
        "id": 19,
        "title": "Fresh pears",
        "description": "Sweet fresh pears on the wooden table",
        "type": "fruit",
        "price": 15.12,
        "rating": 5,
        "imageUrl": "18.jpeg"
    },
    {
        "id": 20,
        "title": "Caprese salad",
        "description": "Homemade healthy caprese salad with tomato mozzarella and basil",
        "type": "vegetable",
        "price": 16.76,
        "rating": 5,
        "imageUrl": "19.jpeg"
    },
    {
        "id": 21,
        "title": "Oranges",
        "description": "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
        "type": "fruit",
        "price": 21.48,
        "rating": 4,
        "imageUrl": "20.jpeg"
    },
    {
        "id": 22,
        "title": "Vegan food",
        "description": "Concept of vegan food",
        "type": "vegetable",
        "price": 29.66,
        "rating": 4,
        "imageUrl": "21.jpeg"
    },
    {
        "id": 23,
        "title": "Breakfast with muesli",
        "description": "Concept of healthy breakfast with muesli",
        "type": "dairy",
        "price": 22.7,
        "rating": 2,
        "imageUrl": "22.jpeg"
    },
    {
        "id": 24,
        "title": "Honey",
        "description": "Honey and honeycell on the table",
        "type": "bakery",
        "price": 17.01,
        "rating": 2,
        "imageUrl": "23.jpeg"
    },
    {
        "id": 25,
        "title": "Breakfast with cottage",
        "description": "Healthy breakfast with cottage cheese and strawberry",
        "type": "fruit",
        "price": 14.05,
        "rating": 1,
        "imageUrl": "24.jpeg"
    },
    {
        "id": 26,
        "title": "Strawberry smoothie",
        "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background",
        "type": "fruit",
        "price": 28.86,
        "rating": 2,
        "imageUrl": "25.jpeg"
    },
    {
        "id": 27,
        "title": "Strawberry and mint",
        "description": "Homemade muesli with strawberry and mint",
        "type": "fruit",
        "price": 26.21,
        "rating": 4,
        "imageUrl": "26.jpeg"
    },
    {
        "id": 28,
        "title": "Ricotta",
        "description": "Ricotta with berry and mint",
        "type": "dairy",
        "price": 27.81,
        "rating": 5,
        "imageUrl": "27.jpeg"
    },
    {
        "id": 29,
        "title": "Cuban sandwiche",
        "description": "Homemade traditional cuban sandwiches with ham pork and cheese",
        "type": "bakery",
        "price": 18.5,
        "rating": 4,
        "imageUrl": "28.jpeg"
    },
    {
        "id": 30,
        "title": "Granola",
        "description": "Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light",
        "type": "dairy",
        "price": 29.97,
        "rating": 3,
        "imageUrl": "29.jpeg"
    },
    {
        "id": 31,
        "title": "Smoothie with chia seeds",
        "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table",
        "type": "fruit",
        "price": 25.26,
        "rating": 5,
        "imageUrl": "30.jpeg"
    },
    {
        "id": 32,
        "title": "Yogurt",
        "description": "Homemade yogurt with raspberry and mint",
        "type": "dairy",
        "price": 27.61,
        "rating": 4,
        "imageUrl": "31.jpeg"
    },
    {
        "id": 33,
        "title": "Sandwich with salad",
        "description": "Vegan sandwich with salad, tomato and radish",
        "type": "vegetable",
        "price": 22.48,
        "rating": 5,
        "imageUrl": "32.jpeg"
    },
    {
        "id": 34,
        "title": "Cherry",
        "description": "Cherry with sugar on old table",
        "type": "fruit",
        "price": 14.35,
        "rating": 5,
        "imageUrl": "33.jpeg"
    },
    {
        "id": 35,
        "title": "Raw asparagus",
        "description": "Raw fresh asparagus salad with cheese and dressing",
        "type": "vegetable",
        "price": 22.97,
        "rating": 4,
        "imageUrl": "34.jpeg"
    },
    {
        "id": 36,
        "title": "Corn",
        "description": "Grilled corn on the cob with salt and butter",
        "type": "vegetable",
        "price": 13.55,
        "rating": 2,
        "imageUrl": "35.jpeg"
    },
    // {
    //     "id": 37,
    //     "title": "Vegan",
    //     "description": "Concept of healthy vegan eating",
    //     "type": "vegan",
    //     "price": 28.96,
    //     "rating": 5,
    //     "imageUrl": "36.jpeg"
    // },
    // {
    //     "id": 38,
    //     "title": "Fresh blueberries",
    //     "description": "Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view",
    //     "type": "fruit",
    //     "price": 21.01,
    //     "rating": 4,
    //     "imageUrl": "37.jpeg"
    // },
    // {
    //     "id": 39,
    //     "title": "Smashed avocado",
    //     "description": "Vegan sandwiches with smashed avocado, tomatoes and radish. top view",
    //     "type": "fruit",
    //     "price": 25.88,
    //     "rating": 0,
    //     "imageUrl": "38.jpeg"
    // },
    // {
    //     "id": 40,
    //     "title": "Italian ciabatta",
    //     "description": "Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view",
    //     "type": "bakery",
    //     "price": 15.18,
    //     "rating": 1,
    //     "imageUrl": "39.jpeg"
    // },
    // {
    //     "id": 41,
    //     "title": "Rustic breakfast",
    //     "description": "Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space",
    //     "type": "dairy",
    //     "price": 21.32,
    //     "rating": 0,
    //     "imageUrl": "40.jpeg"
    // },
    // {
    //     "id": 42,
    //     "title": "Sliced lemons",
    //     "description": "Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.",
    //     "type": "fruit",
    //     "price": 27.14,
    //     "rating": 2,
    //     "imageUrl": "41.jpeg"
    // },
    // {
    //     "id": 43,
    //     "title": "Plums",
    //     "description": "Yellow and red sweet plums",
    //     "type": "fruit",
    //     "price": 19.18,
    //     "rating": 1,
    //     "imageUrl": "42.jpeg"
    // },
    // {
    //     "id": 44,
    //     "title": "French fries",
    //     "description": "Homemade oven baked french fries with ketchup",
    //     "type": "bakery",
    //     "price": 18.32,
    //     "rating": 3,
    //     "imageUrl": "43.jpeg"
    // },
    // {
    //     "id": 45,
    //     "title": "Strawberries",
    //     "description": "Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view, \u0000",
    //     "type": "fruit",
    //     "price": 15.13,
    //     "rating": 3,
    //     "imageUrl": "44.jpeg"
    // },
    // {
    //     "id": 46,
    //     "title": "Ground beef meat burger",
    //     "description": "Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background",
    //     "type": "meat",
    //     "price": 11.73,
    //     "rating": 5,
    //     "imageUrl": "45.jpeg"
    // },
    // {
    //     "id": 47,
    //     "title": "Tomatoes",
    //     "description": "Organic tomatoes made with love",
    //     "type": "fruit",
    //     "price": 26.03,
    //     "rating": 4,
    //     "imageUrl": "46.jpeg"
    // },
    // {
    //     "id": 48,
    //     "title": "Basil",
    //     "description": "Concept of vegan food with basil",
    //     "type": "vegetable",
    //     "price": 15.19,
    //     "rating": 4,
    //     "imageUrl": "47.jpeg"
    // },
    // {
    //     "id": 49,
    //     "title": "Fruits bouquet",
    //     "description": "Abstract citrus fruits bouquet on blue background",
    //     "type": "fruit",
    //     "price": 18.18,
    //     "rating": 1,
    //     "imageUrl": "48.jpeg"
    // },
    // {
    //     "id": 50,
    //     "title": "Peaches on branch",
    //     "description": "Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.",
    //     "type": "fruit",
    //     "price": 25.62,
    //     "rating": 3,
    //     "imageUrl": "49.jpeg"
    // }
]

export default productsList;