import express from "express";

const app = express();

app.use(express.json());

// app.use(express.static('public'));
app.use(express.static('public/browser'));

const port = process.env.port || 8080;

//Serving on port 8080
app.listen(port, () => {
  console.log(`Listening on port ${port} v3...`);
});

//Basic GET hello world route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Basic GET Data by ID route
app.get("/api/pirates/:id", (req, res) => {
  console.log(`GET request RECEIVED`);
  const id = req.params.id;
  const pirate = getPirate(id);
  console.log(id, pirate);
  if (!pirate) {
    res.status(404).send({ error: `Pirate ${id} not found` });
  } else {
    res.send({ data: pirate });
  }
});

//Helper func to simulate HTTP Service data fetch
function getPirate(id) {
  const pirates = [
    { id: 1, name: "Pirate 1", active: "1392", country: "country1" },
    { id: 2, name: "Pirate 2", active: "1392", country: "country2" },
    { id: 3, name: "Pirate 3", active: "1392", country: "country3" },
    { id: 4, name: "Pirate 4", active: "1392", country: "country4" },
    { id: 5, name: "Pirate 5", active: "1392", country: "country5" },
    { id: 6, name: "Pirate 6", active: "1392", country: "country6" },
  ];
  return pirates.find((p) => p.id == id);
}
