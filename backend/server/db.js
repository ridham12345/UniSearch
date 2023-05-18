const mongoose=require("mongoose");

// connecting to MongoDB
module.exports=()=>{
    const connectionParams={
         useNewUrlParser:true,
         useUnifiedTopology:true,
    };
    try{
        mongoose.connect(process.env.DB+'/Data',connectionParams);
        console.log("Connected to database succesfully");
    }
    catch(error){
        console.log(error);
        console.log("could not connect to database!");

    }
};