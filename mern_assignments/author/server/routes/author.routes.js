const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
  app.get("/api/authors", AuthorController.getAllAuthor);
  app.post("/api/authors", AuthorController.createAuthor);
  app.put("/api/authors/edit/:_id", AuthorController.editAuthor);
  app.delete("/api/authors/:_id", AuthorController.deleteAuthor);
  app.get("/api/authors/:_id", AuthorController.getOneAuthor);
};
