const express = require('express')
const mongoose = require("mongoose")
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/routes')(app);


mongoose
    .connect("mongodb+srv://subhashsk:7338578203@cluster0.f0xm5.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    })
    .then(() => {
app.listen(4000,()=>{
  console.log("server satarted")
})
    })