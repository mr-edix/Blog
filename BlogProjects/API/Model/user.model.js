const mongoose  = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type :String,
        unique:true,
        required: true
    },
    email:{
        type :String,
        unique:true,
        required: true
    },
    password:{
           type:String,
           required:true,
           min:4,
           max:20
    }
},{timestamps:true}
);
const user = mongoose.model("user",userSchema);

module.exports = user;