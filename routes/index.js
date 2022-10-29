const authorRouter = require("./author.routes");
const bookRouter = require("./book.routes");

const init = (app) => {
  app.use(authorRouter);
  app.use(bookRouter);
};

module.exports = init;
