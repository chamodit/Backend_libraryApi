const Author = require("../models/author.model");

const addAuthor = (req, res) => {
  if (!req.body.authorId) {
    return res.status(400).json({
      success: false,
      message: "Author's ID is undefined",
    });
  }

  if (!req.body.fname) {
    return res.status(400).json({
      success: false,
      message: "Author's first name is undefined",
    });
  }

  if (!req.body.lname) {
    return res.status(400).json({
      success: false,
      message: "Author's last name is undefined",
    });
  }

  //Adding Author
  const author = new Author(req.body);

  author
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

const viewAuthorById = (req, res) => {
  Author.findById(req.params.id)
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

const viewAuthors = (req, res) => {
  Author.find({})
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
  addAuthor,
  viewAuthorById,
  viewAuthors,
};
