import express from "express";
type Header = string;

const app = express();

function getHeader(): Header {
  return "Hello World";
}

app.get("/", (req, res) => {
  res.send(getHeader());
});

app.listen(3000, () => {
  console.log(`Listening for PORTS http://localhost:${3000}`);
});
