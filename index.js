const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 8080;

const hbs = exphbs.create({
  partials: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static('public'))

app.get("/", (req, res) => {
  const prods = [
    {
      nome: "Abacate",
      preco: 1.5,
    },
    {
      nome: "Batata",
      preco: 2.5,
    },
    {
      nome: "Laranja",
      preco: 2.1,
    },
  ];

  res.render("home", { prods });
});

app.listen(port, () => {
  console.log(`Conectou à porta: ${port}`);
});
