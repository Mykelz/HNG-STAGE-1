const express = require("express");
const app = express();
const Fileroute = require('./routes/file.js') 

const PORT = 5555



app.use(express.json());


app.use("/api", Fileroute);

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});