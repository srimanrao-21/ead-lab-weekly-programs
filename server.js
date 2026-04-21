const mongoose = require("mongoose");
const user = require("./models/User");
async function run() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/testdb1");
        console.log("connected to mongodb");

        const user = new user({
             name: "sriman";
             email: sriman@WebGLSampler.com
             addresses : [
                { street: "123 Main St", city: "New York", country: "USA" },
        { street: "456 Elm St", city: "Boston", country: "USA" }
             ]
        });

        await user.save();
        console.log("user saved successfully");

        const users = await user.find();
        console.log("all users:",users); 
        
    }catch(error){
        console.log("error:",error.message);

    }finally{
        await mongoose.disconnect();
        console.log("disconnect from mongodb");
    }
    
}
run;