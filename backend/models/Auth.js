const mongoose = require('mongoose');
const {Schema} = mongoose;
const FireSchema = new Schema({
    title:String,
    desc:String,
    urlType:String
})
module.exports=mongoose.model('FireFiles', FireSchema);