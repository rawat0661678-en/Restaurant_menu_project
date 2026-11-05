
import React,{ useState } from 'react';
import Card from './Card';

 
function ProductCard(){

  const fooditem =
    [
  {
    "id": 1,
    "name": "Masala Dosa",
    "category": "Breakfast",
    "price": 120,
    "description": "Crisp rice and lentil crepes stuffed with a spiced potato mash, served with coconut chutney and sambar.",
    "rating": 4.7,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2B4QEAhjjq2TATc7xDR3qjAtq1ywZ6WePRrsDD0_OQ&s=10"
  },
  {
    "id": 2,
    "name": "Poha",
    "category": "Breakfast",
    "price": 60,
    "description": "Light and fluffy flattened rice seasoned with turmeric, mustard seeds, curry leaves, and roasted peanuts.",
    "rating": 4.5,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVz0_NV99ytQDJitlk-VPxPKGdVBVAqL-2IsDNWNBAzg&s=10"
  },
  {
    "id": 3,
    "name": "Chole Bhature",
    "category": "Breakfast",
    "price": 150,
    "description": "Spicy, tangy chickpea curry served with large, fluffy deep-fried leavened bread.",
    "rating": 4.8,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDy5TiCSwBWaq7xsnwi0VbMfgCgTGn7vpU5cyH2g4eg&s=10"
  },
  {
    "id": 4,
    "name": "Idli Sambar",
    "category": "Breakfast",
    "price": 80,
    "description": "Steamed savory rice cakes served alongside a flavor-packed lentil and vegetable stew.",
    "rating": 4.6,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttrfkeqfKeuL__2JnWOiTs887H2u3tEmHvsYIctrxAw&s=10"
  },
  {
    "id": 5,
    "name": "Aloo Paratha",
    "category": "Breakfast",
    "price": 90,
    "description": "Whole wheat flatbread stuffed with a spiced mashed potato filling, served with butter and pickle.",
    "rating": 4.7,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9jsIpHQn1U6OQPkepJp0REg5cbnZYi5CeYcgk7AV8Pg&s=10"
  },
  {
    "id": 6,
    "name": "Upma",
    "category": "Breakfast",
    "price": 70,
    "description": "Thick porridge made from roasted semolina, cooked with vegetables, ghee, and warming spices.",
    "rating": 4.3,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5LQLpNGFDJbJ9JEyQ2eYmo8PR3U-9NdJmRZLhPOHCQ&s=10"
  },
  {
    "id": 7,
    "name": "Vada Sambar",
    "category": "Breakfast",
    "price": 85,
    "description": "Crispy, deep-fried savory lentil donuts soaked or served with hot sambar.",
    "rating": 4.5,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyO5PwN3KnBXTce9hj61yZwby2xoFNBLsuMhR443AxQ&s=10"
  },
  {
    "id": 8,
    "name": "Puri Bhaji",
    "category": "Breakfast",
    "price": 100,
    "description": "Deep-fried golden puffed bread served with a mildly spiced, aromatic potato curry.",
    "rating": 4.6,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3x0WAsCoukk9FejhUEV0iVkTRDwrFTfbb0AkwvQothQ&s=10"
  },
  {
    "id": 9,
    "name": "Appam with Stew",
    "category": "Breakfast",
    "price": 140,
    "description": "Thin, lacy rice pancakes with a soft center, paired with a mild, creamy coconut milk vegetable stew.",
    "rating": 4.6,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzN7eryx-VZ3l4gXWaJ23HOav_0NfMqfdzw3tgV4rNLQ&s=10"
  },
  {
    "id": 10,
    "name": "Dhokla",
    "category": "Breakfast",
    "price": 75,
    "description": "Soft, spongy steamed savory cakes made from fermented chickpea batter, tempered with mustard seeds.",
    "rating": 4.4,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BYmQ_RXQvLAKxsrEuoh0WEvU3AB6Zn-zYqGZ5NIwtw&s=10"
  },
  {
    "id": 11,
    "name": "Paneer Butter Masala",
    "category": "Lunch",
    "price": 240,
    "description": "Succulent cottage cheese cubes simmered in a rich, creamy tomato and butter gravy.",
    "rating": 4.8,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaYHMNG_exuOWnSIDBT6XJrb5aPkUKr6qow7wk2cqiA&s=10"
  },
  {
    "id": 12,
    "name": "Chicken Biryani",
    "category": "Lunch",
    "price": 280,
    "description": "Fragrant basmati rice layered with spiced marinated chicken, saffron, and fresh herbs.",
    "rating": 4.9,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4j0Z11P2Q9KrlsOsZBLcUVlrc5Uw5nvgXtuLE1pirig&s=10"
  },
  {
    "id": 13,
    "name": "Rajma Chawal",
    "category": "Lunch",
    "price": 160,
    "description": "A classic North Indian comfort meal of red kidney beans in a thick gravy served over steamed basmati rice.",
    "rating": 4.7,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-HBPDQ8UApessxOBWZ7cRG22iYCB-o7xwIYSK2FWwg&s=10"
  },
  {
    "id": 14,
    "name": "Dal Makhani",
    "category": "Lunch",
    "price": 210,
    "description": "Slow-cooked black lentils and kidney beans enriched with cream, butter, and authentic spices.",
    "rating": 4.8,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj69CQoaUB983VVTvNDUaKrHfX4v5ECnOn1eNZyLT_FA&s=10"
  },
  {
    "id": 15,
    "name": "Veg Thali",
    "category": "Lunch",
    "price": 220,
    "description": "A comprehensive meal platter featuring paneer curry, seasonal veg, dal, rice, roti, raita, and a sweet dish.",
    "rating": 4.6,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhIRBQp4jb03abBwgAH9s3aY_YBJwf3cFTn4nzm-p7Q&s=10"
  },
  {
    "id": 16,
    "name": "Mutton Rogan Josh",
    "category": "Lunch",
    "price": 360,
    "description": "An aromatic Kashmiri mutton dish cooked with a flavorful gravy of ginger, garlic, and robust red spices.",
    "rating": 4.8,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0g1BCKLDLetO5IIS1GwRpfVs6r5dmvD-T3_xhgl3RKw&s=10"
  },
  {
    "id": 17,
    "name": "Chana Masala",
    "category": "Lunch",
    "price": 170,
    "description": "Flavorful, spicy chickpea curry cooked in a traditional onion-tomato base with spice blends.",
    "rating": 4.4,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oF0aU0akjFYSXzC-AteFdLnoDhxLE2xZUTdn3ecz3g&s=10"
  },
  {
    "id": 18,
    "name": "Fish Amritsari",
    "category": "Lunch",
    "price": 290,
    "description": "Batter-fried fish fingers coated with a spiced gram flour mix and carom seeds.",
    "rating": 4.5,
    "image": "https://unsplash.com"
  },
  {
    "id": 19,
    "name": "Kadhi Chawal",
    "category": "Lunch",
    "price": 150,
    "description": "Tangy, spiced yogurt-based curry with fried gram flour fritters, served over steaming hot rice.",
    "rating": 4.5,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3N6fTibBfRmioR8YDgj1HLj_JrwM4uuad10QU3Mvcw&s=10"
  },
  {
    "id": 20,
    "name": "Aloo Gobhi",
    "category": "Lunch",
    "price": 140,
    "description": "A dry, comforting stir-fry of potatoes and cauliflower florets seasoned with ginger and cumin.",
    "rating": 4.2,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwURxixZDlAgIZ5fOByqnkihqRPWfOyIGFPUMNB2VOTQ&s=10"
  },
  {
    "id": 21,
    "name": "Malai Kofta",
    "category": "Dinner",
    "price": 250,
    "description": "Crispy fried potato and paneer dumplings swimming in a rich, velvety cashew-based gravy.",
    "rating": 4.7,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iQ8ypU4Ow4LaLA3Z0N-jZzndE49yWjVVvcHLBSIYYw&s=10"
  },
  {
    "id": 22,
    "name": "Tandoori Chicken",
    "category": "Dinner",
    "price": 320,
    "description": "Chicken bone-in pieces marinated in yogurt and intense spices, roasted to perfection in a clay oven.",
    "rating": 4.8,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AShLoS7sh1PL8uu7o-nxXEOgRxN1tAUcBvfazf54ew&s=10"
  },
  {
    "id": 23,
    "name": "Palak Paneer",
    "category": "Dinner",
    "price": 230,
    "description": "Soft cottage cheese chunks cooked in a vibrant, smoothly puréed spiced spinach gravy.",
    "rating": 4.6,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1QKahc5w1GHJBHj15fE5bkpAOMDtUr-L_kWOf8Y_zGA&s=10"
  },
  {
    "id": 24,
    "name": "Veg Pulao",
    "category": "Dinner",
    "price": 180,
    "description": "Aromatic basmati rice cooked with mixed garden vegetables and whole fragrant spices.",
    "rating": 4.4,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHWO4OYHCeqneg6b0JSGhomsaSwtQ44Bm-M7a4xeiRA&s=10"
  },
  {
    "id": 25,
    "name": "Butter Chicken",
    "category": "Dinner",
    "price": 310,
    "description": "Tender tandoori grilled chicken pieces tossed in a classic silk-smooth, sweet-savory tomato cream sauce.",
    "rating": 4.9,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3u0A7JG4M1Voz_gkKVMJ5FzW3dj8EOAFIMvH3Y2mzyQ&s=10"
  },
  {
    "id": 26,
    "name": "Baingan Bharta",
    "category": "Dinner",
    "price": 170,
    "description": "Smoky, clay-oven roasted eggplant mashed and sautéed with garlic, green chilies, onions, and tomatoes.",
    "rating": 4.3,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeXamorXN638YU8PNWbsRyB2Pal1inouQkkEHdg9Yow&s=10"
  },
  {
    "id": 27,
    "name": "Jeera Rice & Tadka Dal",
    "category": "Dinner",
    "price": 160,
    "description": "Cumin-scented basmati rice served with yellow lentils tempered with ghee, garlic, and dry red chilies.",
    "rating": 4.6,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHm73Z96GkY7une1KbavvPooQWsMftRaldCG2uDEKFLQ&s=10"
  },
  {
    "id": 28,
    "name": "Mushroom Masala",
    "category": "Dinner",
    "price": 220,
    "description": "Plump button mushrooms sautéed in a rich, spicy and semi-dry onion-tomato masala base.",
    "rating": 4.4,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTnsLPCPIYQtO-BBvfeIeiBA2n5r1lRnCDDEIvAYtAw&s=10"
  },
  {
    "id": 29,
    "name": "Bhindi Do Pyaza",
    "category": "Dinner",
    "price": 160,
    "description": "Fresh okra stir-fried with an abundance of onions, raw mango powder, and warm spices.",
    "rating": 4.2,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQczyfVUduNzdBp7nibg_N6MygLNHxo4MtYTrp1JhgeA&s=10"
  },
  {
    "id": 30,
    "name": "Khichdi",
    "category": "Dinner",
    "price": 130,
    "imgae":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX3GHFj-EllYqjbts8-Vi-a6W0SY8aGEy-7GE-Xrxveg&s=10"
  },
  {
"id": 31,
"name": "Gulab Jamun",
"category": "Sweets",
"price": 60,
"description": "Soft, golden-fried milk-solid dumplings soaked deep in a warm, cardamom-scented sugar syrup.",
"rating": 4.9,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwGEzSxTrn1rOm89bOd5tLdvnwpggqSNIhXnJN8m7ug&s=10"
},
{
"id": 32,
"name": "Rasmalai",
"category": "Sweets",
"price": 80,
"description": "Flattened cottage cheese patties steeped in a rich, chilled, saffron-infused milk reduction.",
"rating": 4.8,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcU2aWsctYKdzzRBKpZYTUu0KUhIvIkVEeRyYGlEyP4w&s=10"
},
{
"id": 33,
"name": "Kaju Katli",
"category": "Sweets",
"price": 120,
"description": "Classic, diamond-shaped melt-in-the-mouth fudge slices made entirely from premium cashew paste and sugar.",
"rating": 4.7,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPQh_AkMZYFiKdvv6LjY5YMcc-FPK24nRsXwd9vtF9w&s=10"
},
{
"id": 34,
"name": "Jalebi",
"category": "Sweets",
"price": 70,
"description": "Crispy, spiral-shaped deep-fried batter coils crystallized with an immersion in sugary syrup.",
"rating": 4.6,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj7ESPavvhfmD0DaKt7KlvgYlvG-GJTd91s1zlrGRGA&s=10"
},
{
"id": 35,
"name": "Gajar Ka Halwa",
"category": "Sweets",
"price": 90,
"description": "A warm winter delicacy made of grated carrots slow-cooked with milk, sugar, ghee, and chopped nuts.",
"rating": 4.8,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThdFF67DWe5IHAdORZOYMxRASici_FRKmtFZbHAvK1Q&s=10"
},
{
"id": 36,
"name": "Rasgulla",
"category": "Sweets",
"price": 60,
"description": "Spongy, snow-white balls of chhena (cottage cheese) cooked and stored in clear, sweet syrup.",
"rating": 4.5,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVqac4QyEDCbuO1s9rr4FBpg-_hk6ShAuJkLqt9q-vIw&s=10"
},
{
"id": 37,
"name": "Mysore Pak",
"category": "Sweets",
"price": 100,
"description": "A crumbly yet rich, porous sweet fudge from South India made of chickpea flour, sugar, and generous ghee.",
"rating": 4.6,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-wkm-rj--0FFHDrfwkCNoUwlPPTIZvVtwv0tLRzfqw&s=10"
},
{
"id": 38,
"name": "Kheer",
"category": "Sweets",
"price": 75,
"description": "Traditional Indian rice pudding slow-simmered with milk, basmati rice, cardamom, and saffron strands.",
"rating": 4.4,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwWX8dJfKKjkaST66qGuuz1uN3vF-INRbscVcpE55Ag&s=10"
},
{
"id": 39,
"name": "Laddu",
"category": "Sweets",
"price": 65,
"description": "Spherical sweet treats made from tiny fried gram flour droplets (boondi) bound tightly with syrup.",
"rating": 4.5,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZkggSXMtEgHbV80PSCV7J25WcC0AdTYDHoAOvFaq_Q&s=10"
},
{
"id": 40,
"name": "Sandesh",
"category": "Sweets",
"price": 85,
"description": "An elegant Bengali sweet made from fresh, smooth-kneaded paneer and flavored delicately with date palm jaggery.",
"rating": 4.6,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2gjwg1vKPNOXuI1snBCxLegO4m0lQMvzxOOPRA_o8g&s=10"
},
{
"id": 41,
"name": "Samosa",
"category": "Snacks",
"price": 30,
"description": "Flaky, crisp golden pastry triangles loaded with a rich filling of spiced mashed potatoes and green peas.",
"rating": 4.8,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbg7bO2ygQLwDBIUZqalj4cvit1WEDxxJOyx0K1sRQ6A&s=10"
},
{
"id": 42,
"name": "Pav bhaji",
"category": "Snacks",
"price": 130,
"description": "A thick, spicy mash of mixed seasonal vegetables served alongside heavily buttered, toasted bread rolls.",
"rating": 4.7,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_sLvr6jcOTu5LkbY1krM9DuXwtyepQ5-lQoWEp8E42A&s=10"
},
{
"id": 43,
"name": "Pani Puri",
"category": "Snacks",
"price": 60,
"description": "Hollow, crispy fried puri shells stuffed with potatoes, chickpeas, and filled with spicy-tangy mint water.",
"rating": 4.9,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvGF72X0F_Vwb7yjbEpyOuvG9D4iE6_VS87nmOGFMjXQ&s"
},
{
"id": 44,
"name": "Aloo Tikki Chaat",
"category": "Snacks",
"price": 80,
"description": "Crispy pan-fried potato patties topped with sweet yogurt, tangy tamarind chutney, and hot spices.",
"rating": 4.6,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnyT_oEpw6gAnTcYuO_RM1SAIWshgxV1tFvtp7Fb5yA&s=10"
},
{
"id": 45,
"name": "Bhel Puri",
"category": "Snacks",
"price": 50,
"description": "A light and crunchy snack mix made of puffed rice, tossed chopped vegetables, and zesty chutneys.",
"rating": 4.4,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qVSfdd5YXcswe4HlEy0yAMLaV-I3DJxpiC5HWS2DQA&s=10"
},
{
"id": 46,
"name": "Paneer Tikka",
"category": "Snacks",
"price": 180,
"description": "Spiced and skewered cubes of cottage cheese grilled over hot coals with onions and bell peppers.",
"rating": 4.7,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ICZWsq_pa7vF66CE91qJIMLWmSzstvnpM_6sUapHew&s=10"
},
{
"id": 47,
"name": "Kachori",
"category": "Snacks",
"price": 40,
"description": "Deep-fried, flaky pastry shells stuffed with a spiced mixture of baked yellow mung lentils.",
"rating": 4.3,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAd6_q4G9V3QbRHTQT8pxana8fB62YYYFWpfNC2LNPA&s=10"
},
{
"id": 48,
"name": "Chilli Paneer",
"category": "Snacks",
"price": 160,
"description": "An Indo-Chinese fusion appetizer of batter-fried cottage cheese tossed in a sweet-spicy soy chili sauce.",
"rating": 4.5,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mnoAa2pGd3TmpmZejtNE-vgG9Rb0P-gSJUxZ9g4tMA&s=10"
},
{
"id": 49,
"name": "Spring Rolls",
"category": "Snacks",
"price": 100,
"description": "Crispy-crackly golden wraps stuffed with a seasoned, stir-fried medley of shredded farm vegetables.",
"rating": 4.4,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcixGiBxiATudZqlhOVw6bG9139xdKQNvJP-3kNFugA&s=10"
},
{
"id": 50,
"name": "Pakora Mix",
"category": "Snacks",
"price": 70,
"description": "Golden, deep-fried fritters of assorted vegetables coated in a seasoned chickpea batter.",
"rating": 4.5,
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR044LdYpxSKywK1X6ViPdRHwJOYiivEqjAX4FEhLYTXg&s=10"
}
];

const [ foodArr , setfoodArr]= useState(fooditem)


const handlebreak = () => {
   let item = fooditem.filter((v)=>v.category === 'Breakfast')
    setfoodArr(item)
   
}
// const [ footArr , setfoodArr ] = useState(fooditem)

const handlelunch = ()=>{
  let item=fooditem.filter((v)=>v.category === 'Lunch')
  setfoodArr(item)
}

const handledinner = ()=>{
  let item = fooditem.filter((v)=> v.category === 'Dinner')
  setfoodArr(item)
}

const handlesweets = ()=>{
  let item = fooditem.filter((v)=>v.category === 'Sweets')
  setfoodArr(item)
}


const handlesnacks = ()=>{
  let item=fooditem.filter((v)=>v.category === 'Snacks')
  setfoodArr(item)
}

const handleall = ()=>{
  let item =fooditem
  setfoodArr(item)
}
  return(

    <>
  <div className='grid grid-cols-6 gap-4 m-4'>
    <button className=' px-11 py-2 bg-rose-400 text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] hover:bg-blue-700' onClick={handleall}>All Menu</button>
    <button className=' px-11 py-2 bg-rose-400 text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] hover:bg-blue-700' onClick={handlesnacks}>Snacks</button>
    <button className=' px-11 py-2 bg-rose-400 text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] hover:bg-blue-700' onClick={handlesweets}>Sweets</button>
    <button className=' px-11 py-2 bg-rose-400 text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] hover:bg-blue-700' onClick={handlebreak}>Breakfast</button>
    <button className=' px-11 py-2 bg-rose-400 text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] hover:bg-blue-700' onClick={handlelunch}>Lunch</button>
    <button className=' px-11 py-2 bg-rose-400 text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] hover:bg-blue-700' onClick={handledinner}>Dinner</button>
  </div>

  <hr />

  <div className="row">
    <div className='grid grid-cols-4 gap-3 m-2'>
      {foodArr.map((v) => <Card key={v.id || v.title} Product={v} />)}
    </div>
  </div>
</>


    // <>
    // <div className='grid grid-cols-3 gap-4 m-4'>
    //         <button className=' bg-mauve-500  text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] ' onClick={handleall} >All products</button>
    //         <button  className=' px-6 py-3 bg-mauve-500  text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] '  onClick={handlesnacks}>Snakes</button>
    //         <button  className=' px-6 py-3 bg-mauve-500  text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] ' onClick={handlesweets} >Sweet</button>
    //         <button className=' px-6 py-3 bg-mauve-500  text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] '  onClick={handlebreak}>Breakfast</button>
    //         <button  className=' px-6 py-3 bg-mauve-500  text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] ' onClick={handlelunch} >Lunch</button>
    //         <button  className=' px-6 py-3 bg-mauve-500  text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] ' onClick={handledinner}>Dinner</button>
    //     </div>

    //     <hr></hr>

    //     <div className="row ">
    //       <div className='grid grid-cols-4 gap-3 m-2'>

    //         {
    //             foodArr.map((v)=> <Card Product={v}/>)            
    //         }

    //       </div>

    //     </div>
    // </>
  )
}
export default ProductCard