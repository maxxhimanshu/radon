const express = require('express');

const router = express.Router();
const printDate = require("../util/helper.js")
const formatt = require("../validator/formator.js")
const welcome = require("../logger/logger.js")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    
});
router.get("/welcom",function(req, res)
{
    welcome.welcome();
}
)
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
   console.log( _.chunk(months, 4) )
});

module.exports = router;

// adding this comment for no reason