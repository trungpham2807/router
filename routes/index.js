var express = require('express');
var router = express.Router();

/* GET home page. */

// 1.As a Postman APP I can make a GET request to http://localhost:5000/news and receive back a message Successfully get all news

// router.get('/', function(req, res, next){
//   res.send("Successfully get all news")
// })
//2.As a Postman APP I can make a GET request to http://localhost:5000/news?page=2 and receive an message, the Successfully get page 2 news
//3. As a Postman APP I can make a GET request to http://localhost:5000/news?page=3 and receive an message, the Successfully get page 3 news
//4. As a Postman APP I can make a GET request to http://localhost:5000/news?page=n and receive an message, the Successfully get page n news

// router.get('/', function(req, res, next) { //http://localhost:5000/news?page=
//   // res.render('index', { title: 'Express' });
//   // console.log("request object query", req.query)
//   // const page = req.query.page; 
//   // const limit = req.query.limit;
//   const {page} = req.query;
//   // console.log("page", page)
//   res.send(`successfull get page ${page} news`)
// });



// //5. a Postman APP I can make a GET request to http://localhost:5000/news?q=Facebook and receive back a message Successfully get all news related to query Facebook.
// router.get('/', function(req, res, next) {
//   const q = "Facebook"; 
//   res.send("Successfully get all news related to query Facebook");
// })
// //6. As a Postman APP I can make a GET request to http://localhost:5000/news?q=anyString and receive back a message Successfully get all news related to query anySring.
// router.get('/', function(req, res, next) {
//   const q = req.query.q; 
//   res.send(`Successfully get all news related to query ${q}`);
// })
// //7. As a Postman APP I can make a GET request to http://localhost:5000/news?title=Mobile and receive back a message Successfully get all news that have tittle Mobile or mobile.
// router.get('/', function(req, res, next) {
//   const title = "Mobile"; 
//   res.send("Successfully get all news that have tittle Mobile or mobile");
// })
// //8. As a Postman APP I can make a GET request to http://localhost:5000/news?title=dynamicValue and receive back a message Successfully get all news that have tittle according to dynamicValue.
// router.get('/', function(req, res, next) {
//   const title = req.query.title; 
//   res.send(`Successfully get all news that have tittle according to ${title}`);
// })
// //9. As a Postman APP I can make a GET request to http://localhost:5000/news?city=New York and receive back a message located in New York.
// router.get('/', function(req, res, next) {
//   const city = "New York"; 
//   res.send("located in New York");
// })
// //10. As a Postman APP I can make a GET request to http://localhost:5000/news?category=dynamicValue. and receive back a message Successfully get all news that have category according to dynamicValue.
// router.get('/', function (req, res, next) {
//   const category = req.query.category;
//   res.send(`Successfully get all news that have category according to ${category}`);
// })
// //11. As a Postman APP I can make a GET request to http://localhost:5000/news?category=dynamicValue&city=dynamicValue&title=dynamicValue. and receive back a message Successfully get all news that have a string of all queries and theirs dynamicValue.
// router.get('/', function (req, res, next) {
//   const category = req.query.category;
//   const city = req.query.city;
//   const title = req.query.title; 
//   res.send(`Successfully get all news that have a string of all queries ${category} ${city} ${title}`);
// })
// //12. As a Postman APP I can make a GET request to http://localhost:5000/news/:id and receive a message Successfully get detail of 1 single new with the id is dynamicValue
// //http://localhost:5000/news/:id
// router.get('/:id', function (req, res, next){
//   const id = req.params.id;
//   console.log("params", req.params)
//   res.send(`Successfully get detail of 1 single new with the id is ${id}`)
// })
//13. As a Postman APP I can make a POST request to http://localhost:5000/news with a request body contain title,category,city and receive a message Successfully create a news about title in city and related to category . Example below. Example request body
router.post("/", function (req, res,next) {
  const {title, category, city} = req.body;
  console.log(req.body);
  res.send(`Successfully create a news about ${title} in ${city} and related to ${category}`)
})
//14. As a Postman APP I can make a PUT request to http://localhost:5000/news/:id with a request body contain title,category,city and receive a message Successfully find the news with id , and update the content with title in city and related to category . Example below.
router.put("/:id", function (req, res,next) {
  const id = req.params.id;
  const {title, category, city} = req.body;
  console.log(req.body);
  res.send(`Successfully update a news with id ${id} about ${title} in ${city} and related to ${category}`)
})
//15. As a Postman APP I can make a DELETE request to http://localhost:5000/news/:id and receive a message Successfully find the news with id , and delete
router.delete('/:id', function (req, res, next){
  const id = req.params.id;
  res.send(`Successfully find the news with ${id} and delete`)
})
module.exports = router;
