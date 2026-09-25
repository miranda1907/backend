import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line

app.get("/api", (req,res) => {
  const time = req.params.date;
 
  if (!time) {
    const currentTime = new Date();
    res.json({ unix: currentTime.getTime(), utc: currentTime.toUTCString() })
  } 
});

app.get("/api/:date", (req, res) => {
  const time = req.params.date;

  const providedDate = /^[0-9]+$/.test(time) ? new Date(Number(time)) : new Date(time);
  isNaN(providedDate) ? 
    res.status(400).json({error: "Invalid Date"}) 
    :
    res.json({unix: providedDate.getTime(), utc: providedDate.toUTCString()});  
    }
);

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
