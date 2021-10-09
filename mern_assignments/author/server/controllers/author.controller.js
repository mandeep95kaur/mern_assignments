const Author = require("../models/author.model");

const createAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => res.json(newAuthor))
    .catch((err) => console.log(err));
};

const getOneAuthor = (req, res) => {
  Author.findById({ _id: req.params._id })
    .then((oneAuthor) => res.json(oneAuthor))
    .catch((err) => console.log(err));
};

const getAllAuthor = (req, res) => {
  Author.find({})
    .collation({ locale: "en", strength: 2 })
    .sort({ authorName: 1 })
    .then((allAuthors) => res.json(allAuthors))
    .catch((err) => console.log(err));
};

const deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params._id })
    .then((deletedAuthor) => res.json(deletedAuthor))
    .catch((err) => console.log(err));
};

const editAuthor = (req, res) => {
  Author.findByIdAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((oneAuthor) => res.json(oneAuthor))
    .catch((err) => console.log(err));
};

module.exports = {
  createAuthor,
  deleteAuthor,
  editAuthor,
  getAllAuthor,
  getOneAuthor,
};
