const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(":D Welcome to Vidly!!!");
});

module.exports = router;
