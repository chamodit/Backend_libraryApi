const router = require("express").Router();
const authorController = require("../controllers/author.controller");

router.post("/authors", authorController.addAuthor);
router.get("/authors", authorController.viewAuthors);
router.get("/authors/:id", authorController.viewAuthorById);

module.exports = router;
