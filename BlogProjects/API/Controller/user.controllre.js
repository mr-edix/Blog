const User = require("../Model/user.model")
module.exports.test = ((req,res)=>{
    res.json("hi there");
})


module.exports.signup = async (req,res)=>{
    let data = req.body;
    const Newuser = new User({
        username:data.username,
        email:data.email,
        password:data.password
    })
    try
    {
        const result = await Newuser.save();
        console.log(data)
        res.json("Register Successfully");
    }
    catch(err)
    {
    res.status(400).json(err.errmsg);
    }

   
}