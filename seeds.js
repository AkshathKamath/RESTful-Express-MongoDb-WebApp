const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/farm', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Mongo Connected");
});
const Product=require('./models/product');



//const p=new Product({
  //  name:'Grapefruit',
    //price: 1.99,
    //category: 'fruit'
//})
//p.save().then(p => {
  //  console.log(p);
// })
// .catch(e =>{
  //  console.log(e);
 //})
const seedProducts=[
    {
        name: 'Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Whole Milk',
        price: 2.69,
        category: 'dairy'
    }
];
 Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e);
})


