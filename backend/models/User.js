const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
   username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true                                     
},
    country: {
        type: String,
        required: true                                     
},
city: {
    type: String,
    required: true                                     
},
phone: {
    type: String,
    required: true                                     
},
    img: {
        type: String,                                   
},
    
    
isAdmin:{
    type:Boolean,
    default:false
}
},
{
    timestamps:true
});                                           
module.exports = mongoose.model("users", UserSchema);