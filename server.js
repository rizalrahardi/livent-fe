// require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.use( express.static( 'views/assets/img' ) );
app.use( express.static('views/assets/style'))
app.use( express.static( 'views/assets/img/icon'))

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("home", {
      title: "Livent",
    });
  });

app.listen(port, () => {
    console.log(`Server Ready on ${port}`)
})