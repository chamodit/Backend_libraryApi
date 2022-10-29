const router = require("express").Router();
const bookController = require("../controllers/book.controller");

router.post("/books", bookController.addBook);
router.get("/books", bookController.viewBooks);
router.get("/books/:id", bookController.viewBookById);

module.exports = router;
