const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    if (book.author_id) { 
        if (book.publisher){
            if (await authorModel.findOne({_id: book.author_id })) {
                if (await publisherModel.findOne({_id: book.publisher})){
                    let bookCreated = await bookModel.create(book)
                    res.send({bookCreated})
                } else{
                    res.send("Publisher is not valid.")
                }
        } else{
            res.send("Author is not valid")
        }
        } else {
            res.send("Publisher is required.")
        }
    } else {
        res.send("Author id is required")
    }
}


const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id', "publisher")
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails