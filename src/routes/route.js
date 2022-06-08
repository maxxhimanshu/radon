const express = require('express');
const router = express.Router();

router.get('/movies', function (req, res){
    const arr = ['Pathaan', 'Jawan', 'Ludo', 'Runway 34', 'Inception']
    res.send(arr)
})

router.get('/movies/:index', function (req, res){
    let movies = ["Pathaan", "Jawan", "Ludo", "Runway 34", "Inception"]
    console.log("Movie name is " + movies[req.params.index])
    res.send(movies[req.params.index])
})


// router.get('/movies/:index', function (req, res){
//     let movies = ["Pathaan", "Jawan", "Ludo", "Runway 34", "Inception"]
//     if (req.params.index < movies.length){
//         console.log("Movie name is " + movies[req.params.index])
//     } else {
//         console.log("Error: Please enter the valid index value for movie name")
//     }
//     res.send(movies[req.params.index])
// })

// router.get("/films", function (req, res){
//     let moviesObj = [{"id" : 1, "name" : "Pathaan"}, {"id" : 2, "name" : "Jawan"}, {"id" : 3, "name" : "Ludo"}, {"id" : 4, "name" : "Runway 34"}, {"id" : 5, "name" : "Inception"}]
//     console.log(moviesObj)
//     res.send(moviesObj)
// })

// router.get("/films/:filmId", function (req, res){
//     let moviesObj = [{"id" : 1, "name" : "Pathaan"}, {"id" : 2, "name" : "Jawan"}, {"id" : 3, "name" : "Ludo"}, {"id" : 4, "name" : "Runway 34"}, {"id" : 5, "name" : "Inception"}]
//     if (req.params.filmId < moviesObj.length){
//         console.log("Name of movie with this Id is " + moviesObj[req.params.filmId])
//         res.send(moviesObj[req.params.filmId])
//         } else {
//         console.log("Error: No movie has this Id")
//         }
// })

module.exports = router;

// adding this comment for no reason