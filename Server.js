import express from "express";
import { HOME } from "./Routing/Routing.js";
import path from "node:path";
const __dirname = path.resolve();
function getHeader() {
    return "Hello World";
}
const app = express();
app.use(express.static("public"));
app.get(HOME, (req, res) => {
    res.send(getHeader());
});
app.get("/colors", (req, res) => {
    const op = {
        root: path.join(__dirname),
    };
    res.sendFile("./public/Colors.html", op, function (err) {
        if (err) {
            console.log(err);
        }
    });
});
app.listen(3000, () => {
    console.log(`Listening for PORTS http://localhost:${3000}`);
});
