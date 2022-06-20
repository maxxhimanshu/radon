
let axios = require("axios")


let getDistrictsbydate = async function (req, res) {
    try {

        let id = req.params.districtId
        let givendate = req.params.date


        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${id}&date=${givendate}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getweather = async function (req, res) {
    try {


        let cityAr = []
        cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

        for (i = 0; i < cities.length; i++) {
            city = cities[i]
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a6c967706478065f362b77e144b97650`
            }
            let result = await axios(options)
            cityAr.push({ city: city, temp: result.data.main.temp })
        }
        cityAr.sort((a,b)=>a.temp-b.temp);
        res.status(200).send({ msg: cityAr })
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: err.message })
    }
}
let mymeme = async function (req, res) {
    try {
      
        let Id=req.query.id;
        let title1 = req.query.text1
        let title2 = req.query.text2
        console.log(`query params are: ${Id} ${title1}`)
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${Id}&text0=${title1}&text1=${title2}&username=chewie12345&password=meme@123`,
            
        }
        let result = await axios(options)
    
        res.status(200).send({ msg:result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getDistrictsbydate = getDistrictsbydate
module.exports.getweather = getweather
module.exports.mymeme = mymeme
