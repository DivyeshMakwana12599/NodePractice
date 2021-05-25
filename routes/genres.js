const express = require("express");
const Joi = require("joi");
const router = express.Router();

let genres = [
  { id: 1, name: "HollyWood" },
  { id: 2, name: "BollyWood" },
  { id: 3, name: "Action" },
];

router.use(express.json());

//get methods for genres
router.get("/", (req, res) => {
  res.send(genres);
});

router.get("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send(":( genre not found");
  res.send(genre);
});

//post method for genres
router.post("/", (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.status(200).send(genre);
});

//put method for genres
router.put("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send(":( genre not found");
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  index = genres.indexOf(genre);
  genre.name = req.body.name;
  genres[index] = genre;
  console.log(genres);
  res.send(genre);
});

function validate(data) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(data, schema);
}

module.exports = router;
