const express = require('express');
const uc = require('lodash');
const router = express.Router();
const printDate = require("../util/helper.js")
const formatt = require("../validator/formator.js")
const wel = require("../logger/logger.js")


router.get('/test-me', function (req, res) {
    res.send('My  ever api!')
    
});

router.get("/welcom",function(req, res)
{
    wel.welcome();
})
router.get("/mydat",function(req, res)
{
    printDate.printDate()
    printDate.printMonth()
    printDate.getBatchInfo()

})
router.get("/third",function(req, res)
{
    formatt.trimmer()
    formatt.loww()
    formatt.upp()
    
})
router.get("/hello",function(req, res)
{
    res.send('hello there')
    months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
   console.log( uc.chunk(months, 3) )

   ten_num=[1,3,5,7,9,11,13,15,17,19]
   console.log( uc.tail(ten_num) )
   ar1=[1,2,3]
   ar2=[3,4,5]
   ar3= [5,6,7]
   ar4=[7,8,9]
   ar5=[9,10,11]
   console.log( uc.union(ar1,ar2,ar3,ar4,ar5) )
   pairr = [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    pairObj= uc.fromPairs(pairr)
    console.log(pairObj)
});

module.exports = router;

// adding this comment for no reason