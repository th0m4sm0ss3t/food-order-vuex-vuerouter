const products = [
    {
        "id": 1, 
        "title": "Churros (x3)", 
        "description": "Cupcake ipsum dolor sit amet oat cake. Cheesecake pudding cotton candy toffee lemon drops cake croissant gummi bears tart. Pastry cupcake tiramisu cotton candy caramels lemon drops sweet ice cream. Lollipop danish gummi bears gingerbread marshmallow ice cream gummi bears macaroon jelly beans. Macaroon Dessert cake marshmallow liquorice sesame snaps lollipop jelly beans. Chupa chups cotton candy cake pie croissant. Wafer sesame snaps bonbon cake bonbon. Marzipan brownie marzipan pudding pudding halvah candy wafer carrot cake.", 
        "price": 2.00, 
        "inventory": 8, 
        "img": "https://cdn.pixabay.com/photo/2017/03/30/15/47/churros-2188871_960_720.jpg",
        "slug" : "churros-x3",
        "nbOfPieceOrdered": 0,
        "type": "Dessert",
        "typeSlug" : "dessert"
    },
    {
        "id": 2,
        "title": "Burger",
        "description": "Tongue capicola pastrami pork belly t-bone short ribs. Pancetta kielbasa turducken, short ribs tenderloin salami ham hock tail pig beef shankle beef ribs frankfurter sirloin. Pork loin tri-tip beef ribs chicken, pork filet mignon kielbasa pastrami biltong. Chislic doner short ribs turkey t-bone strip steak frankfurter ball tip pastrami tongue pork tri-tip swine cupim ham. Kielbasa turducken shoulder ham tenderloin doner buffalo tongue ball tip porchetta chislic capicola short ribs tri-tip filet mignon. Jowl brisket shankle capicola, shoulder andouille rump hamburger turkey landjaeger. Sirloin doner tenderloin drumstick porchetta kevin kielbasa, shankle brisket bacon rump.",
        "price": 10.00,
        "img": "https://cdn.pixabay.com/photo/2016/11/18/15/03/burger-1835192_960_720.jpg",
        "slug" : "burger",
        "nbOfPieceOrdered": 0,
        "type": "Main meal",
        "typeSlug" : "main-meal"
    },
    {
        "id": 3,
        "title": "French fries",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab sunt modi eaque omnis quae, aperiam blanditiis veritatis! Numquam eligendi accusantium quidem voluptate modi asperiores eveniet at ipsa delectus soluta, corrupti, sint cumque exercitationem perferendis? sit amet consectetur adipisicing elit. Neque facilis sint ipsam consequatur magnam dignissimos culpa in obcaecati! Laboriosam, voluptates, consequuntur aliquam magnam laborum commodi earum reprehenderit asperiores ex recusandae velit veniam exercitationem sed ad non dolorum odio doloribus iusto? Libero minus dolor blanditiis ducimus.",
        "price": 3.00,
        "img": "https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_960_720.jpg",
        "slug" : "french-fries",
        "nbOfPieceOrdered": 0,
        "type": "Side meal",
        "typeSlug" : "side-meal"
    },
    {
        "id": 4,
        "title": "Fried chicken (x5)",
        "description": "Cheese strings melted cheese cauliflower cheese. Mascarpone rubber cheese queso fromage cheese and wine feta caerphilly everyone loves. Cheeseburger cauliflower cheese cheesy grin croque monsieur melted cheese brie fromage frais rubber cheese. Pepper jack cheese slices everyone loves goat cheesy grin squirty cheese the big cheese stilton. Halloumi caerphilly ricotta macaroni cheese danish fontina red leicester queso pecorino. Fondue boursin melted cheese squirty cheese brie port-salut parmesan mozzarella. Melted cheese cut the cheese cheesecake cow paneer emmental bocconcini croque monsieur. Blue castello parmesan blue castello cheesy feet fromage frais feta everyone loves caerphilly. Bavarian bergkase paneer goat edam babybel brie cheesy feet chalk and cheese. Jarlsberg squirty cheese cream cheese queso camembert de normandie bocconcini cheesy grin cheesy feet. Cheese strings fromage red leicester hard cheese fromage cheese strings parmesan roquefort. Queso melted cheese pecorino cheese slices caerphilly.",
        "price": 6.00,
        "img": "https://cdn.pixabay.com/photo/2015/03/26/09/39/fried-chicken-690039_960_720.jpg",
        "slug" : "fried-chicken-x5",
        "nbOfPieceOrdered": 0,
        "type": "Main meal",
        "typeSlug" : "main-meal"
    },
    {
        "id": 5,
        "title": "Coffee",
        "description": "Dartfish large-eye bream oilfish: speckled trout orbicular velvetfish goldfish largemouth bass orbicular batfish sind danio? Stonefish African glass catfish chub ruffe piranha; weatherfish yellow bass deep sea anglerfish, gulf menhaden. Flathead pipefish brook lamprey four-eyed fish beluga sturgeon Sevan trout tailor spiny eel. Northern squawfish ghost pipefish lionfish blackchin; pirate perch, flagfish blacktip reef shark northern anchovy? Old World rivuline yellowfin surgeonfish; sculpin, Lost River sucker Atlantic herring.",
        "price": 1.50,
        "img": "https://cdn.pixabay.com/photo/2017/04/25/08/02/coffee-beans-2258839_960_720.jpg",
        "slug" : "coffee",
        "nbOfPieceOrdered": 0,
        "type": "Drink",
        "typeSlug" : "drink"
    },
    {
        "id": 6,
        "title": "Soda",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab sunt modi eaque omnis quae, aperiam blanditiis veritatis!",
        "price": 2.00,
        "img": "https://cdn.pixabay.com/photo/2019/08/13/20/02/coca-cola-4404130_960_720.jpg",
        "slug" : "soda",
        "nbOfPieceOrdered": 0,
        "type": "Drink",
        "typeSlug" : "drink"
    },
    {
        "id": 7,
        "title": "Salad",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab sunt modi eaque omnis quae, aperiam blanditiis veritatis! Numquam eligendi accusantium quidem voluptate modi asperiores eveniet at ipsa delectus soluta, corrupti, sint cumque exercitationem perferendis?",
        "price": 4.00,
        "img": "https://cdn.pixabay.com/photo/2016/03/09/15/22/food-1246621_960_720.jpg",
        "slug" : "salad",
        "nbOfPieceOrdered": 0,
        "type": "Main meal",
        "typeSlug" : "main-meal"
    },
    {
        "id": 8,
        "title": "Sandwich",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab sunt modi eaque omnis quae, aperiam blanditiis veritatis! Numquam eligendi accusantium quidem voluptate modi asperiores eveniet at ipsa delectus soluta, corrupti",
        "price": 5.50,
        "img": "https://images.pexels.com/photos/4193876/pexels-photo-4193876.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "slug" : "sandwich",
        "nbOfPieceOrdered": 0,
        "type": "Main meal",
        "typeSlug" : "main-meal"
    },
    {
        "id": 9,
        "title": "Carrot Fries",
        "description": "Flathead pipefish brook lamprey four-eyed fish beluga sturgeon Sevan trout tailor spiny eel. Northern squawfish ghost pipefish lionfish blackchin; pirate perch, flagfish blacktip reef shark northern anchovy? Old World rivuline. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab sunt modi eaque omnis quae, aperiam blanditiis veritatis! Numquam eligendi accusantium quidem voluptate modi asperiores eveniet at ipsa delectus soluta, corrupti",
        "price": 3.00,
        "img": "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "slug" : "carrot-fries",
        "nbOfPieceOrdered": 0,
        "type": "Side meal",
        "typeSlug" : "side-meal"
    },
    {
        "id": 10,
        "title": "Hot Dog",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab sunt modi eaque omnis quae, aperiam blanditiis veritatis! Provident ab sunt modi eaque omnis quae, aperiam blanditiis.",
        "price": 2.50,
        "img": "https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "slug" : "hot-dog",
        "nbOfPieceOrdered": 0,
        "type": "Main meal",
        "typeSlug" : "main-meal"
    },
    {
        "id": 11,
        "title": "Chocolate Muffin",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Sevan trout tailor spiny eel. Northern squawfish ghost pipefish lionfish blackchin; pirate perch, flagfish blacktip reef shark northern anchovy? Old World rivuline. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab sunt modProvident ab sunt modi eaque omnis quae, aperiam blanditiis veritatis! Provident ab sunt modi eaque omnis quae, aperiam blanditiis.",
        "price": 2.00,
        "img": "https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "slug" : "chocolate-muffin",
        "nbOfPieceOrdered": 0,
        "type": "Dessert",
        "typeSlug" : "dessert"
    },
    {
        "id": 12,
        "title": "Vanilla Ice Cream (Cone)",
        "description": "r batfish sind danio? Stonefish African glass catfish chub ruffe piranha; weatherfish yellow bass deep sea anglerfish, gulf menhaden. Flathead pipefish brook lamprey four-eyed fish beluga sturgeon Sevan trout tailor spiny eel. Northern squawfish ghost pipefish lionfish blackchin; pirate perch, Provident ab sunt modProvident ab sunt modi eaque omnis quae, aperiam blanditiis veritatis! Provident ab sunt modi eaque omnis quae, aperiam blanditiis.",
        "price": 1.50,
        "img": "https://images.pexels.com/photos/1294943/pexels-photo-1294943.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "slug" : "ice-cream-cone",
        "nbOfPieceOrdered": 0,
        "type": "Dessert",
        "typeSlug" : "dessert"
    },
];

export default products;