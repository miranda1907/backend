const express = require("express");
const { inputCleaner, inputValidator } = require("./middleware.js");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("/form");
});

app.get("/form", (req, res) => {
    res.sendFile("index.html", { root: "public" });
});

app.post("/submit", inputCleaner, inputValidator, (req, res)=> {
    res.send(`${req.body.username}: ${req.body.comment}`);

});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
