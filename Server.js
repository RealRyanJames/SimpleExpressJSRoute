import express from "express";
import { HOME } from "./Routing/Routing.js";
import path from "node:path";
import { COLORS } from "./Routing/Routing.js";
const __dirname = path.resolve();
function getHeader() {
    return "Hello World";
}
const app = express();
app.use(express.static("public"));
app.use(express.static("GameColor"));
app.get(HOME, (req, res) => {
    res.send(getHeader());
});
app.get(COLORS, (req, res) => {
    const op = {
        root: path.join(__dirname),
    };
    res.sendFile("./GameColor/public/Colors.html", op, function (err) {
        if (err) {
            console.log(err);
        }
    });
});
app.listen(3000, () => {
    console.log(`Listening for PORTS http://localhost:${3000}`);
});
