import express from "express";
import { HOME, RGB } from "./Routing/Routing.js";
import path from "node:path";
const __dirname = path.resolve();
function getHeader() {
    return "Hello World";
}
function getRGBTitle() {
    return "Welcome to: RGB  Route";
}
const app = express();
app.use(express.static("public"));
app.use(express.static("public/Pages"));
app.get(HOME, (req, res) => {
    res.send(getHeader());
});
app.get(RGB, (req, res) => {
    res.send(getRGBTitle());
    const op = {
        root: path.join(__dirname),
    };
    res.sendFile("./Pages/pageFiles/index.html", op, function (err) {
        if (err) {
            console.log(err);
        }
    });
    res;
});
app.listen(3000, () => {
    console.log(`Listening for PORTS http://localhost:${3000}`);
});
