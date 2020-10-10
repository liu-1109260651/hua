const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user = require('./router/user.js')
const product = require('./router/product')
const cors = require("cors");
app.listen(9000);
app.use(express.static("./public"))
app.use(cors())
app.use('/user',user)
app.use('/pro',product)