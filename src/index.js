const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://maxxhimanshu:himanshu@cluster0.sg6kw.mongodb.net/db-him1", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
const myMW=function (req,res,next){
    var today= new Date()
    
    var ip = req.ip
    var url= req.originalUrl
    console.log(today)
    console.log(` ${ip} ${url}`)

    next()
}
app.use(myMW)
// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
