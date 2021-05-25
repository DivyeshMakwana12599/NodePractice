const homepage = require("./routes/homepage");
const genres = require("./routes/genres");
const express = require("express");
const app = express();

app.use("/", homepage);
app.use("/api/genres", genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on PORT: ${port}...`));
