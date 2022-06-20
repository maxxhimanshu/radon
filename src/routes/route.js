const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const myController= require("../controllers/myController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/getByPin", CowinController.getByPin)

router.get("/cowin/districtsInState/:districtId/:date", myController.getDistrictsbydate)

router.get("/weather", myController.getweather)
router.post("/meme", myController.mymeme)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;