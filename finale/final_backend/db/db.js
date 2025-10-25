const mongoose = require("mongoose");

const connectMongo = () => {
  mongoose.connect("mongodb+srv://aquib:Aquib@92@cluster0.xpaovsz.mongodb.net/?appName=Cluster0")
    .then(() => {
      console.log('connected');
    }).catch((err) => {
      console.log(err);
    })
}

module.exports = connectMongo