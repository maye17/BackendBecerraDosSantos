const mongoose = require('mongoose');
const {Schema, model} = require('mongoose')


const messageSchema = new Schema({
    user: { type: String, required: true },
    message: { type: String, required: true }
  });


  module.exports = model("message", messageSchema)

