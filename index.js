const Joi = require("joi");
const express = require("express");
const app = express();
app.use(express.json());

let genres = [
  { id: 1, name: "HollyWood" },
  { id: 2, name: "BollyWood" },
  { id: 3, name: "Action" },
];

//get methods for genres
app.get("api/genres", (req, res) => {
  res.send(genres);
});

app.get("api/genres/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send(":( genre not found");
  res.send(genre);
});

//post method for genres
app.post("/api/genres", (req, res) => {
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
app.put("/api/genres/:id", (req, res) => {
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

//listning on port default port = 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});

function validate(data) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(data, schema);
}
