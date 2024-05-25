import express from "express";
const app = express();

const myLogger = function (req, res, next) {
  console.log(`${new Date().toDateString()} - Route: ${req.originalUrl}`);

  next();
};

app.use(myLogger);
app.use(express.urlencoded({ extended: false }));

/* /goit/test */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/goit", (req, res) => {
//   res.send("GoIT!");
// });

app.get("/goit/:id", (req, res) => {
  res.send(`<h1>Id</h1> Parametrul: ${req.params.id}`);
});

app.get("/products", (req, res) => {
  console.dir(req.query);

  if (!req.query?.id || !req.query?.category) {
    res.send("A aparut o eroare");
  }

  res.send(
    `Produsul cu id ${req.query?.id} si categoria ${req.query.category}`
  );
});

app.post("/products", (req, res) => {
  console.dir(req.body);

  const { name, category } = req.body;

  res.send(
    `Produsul cu numele ${name} si categoria ${category} au fost adaugate.`
  );
});

app.get("/go?it/test", (req, res) => {
  res.send(
    `<html>
      <body>
        <h1>GoIT Test</h1>
        <p>Test</p>
      </body>
    </html>`
  );
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
