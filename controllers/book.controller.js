const { default: mongoose } = require("mongoose");
const Book = require("../models/book.model");

const addBook = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      success: false,
      message: "Book name is undefined",
    });
  }

  if (!req.body.isbn) {
    return res.status(400).json({
      success: false,
      message: "ISBN is undefined",
    });
  }

  //Adding Books
  const book = new Book(req.body);
  book.author = mongoose.Types.ObjectId(req.body.author);

  book
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

const viewBookById = (req, res) => {
  Book.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(501).json({
        success: false,
        data: err.message,
      });
    });
};

const viewBooks = (req, res) => {
  Book.find({})
    .populate("author")
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        data: err.message,
      });
    });
};

module.exports = {
  addBook,
  viewBookById,
  viewBooks,
};
