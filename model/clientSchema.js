const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  clientFirstName: { type: String },
  clientLastName: { type: String },
  clientage: { type: Number },
  phone: { type: Number },
  address: { type: String },
});

module.exports=new mongoose.model("client",clientSchema)
