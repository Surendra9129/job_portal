const port=5000;
const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());

const connect=()=>{
    return mongoose.connect(`mongodb+srv://surendra:ssurendra9@cluster0.n3ctp.mongodb.net/portal`)
}

// job schema
const jobSchema=mongoose.Schema(
    {
       city:{type:String, required:true},
       skill:{type:String, required:true},
       email:{type:String, required:false},
       work_from_home:{type:String, required:true},
       notice_period:{type:String, required:true},
       rating:{type:Number, required:true}
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const job=mongoose.model('job',jobSchema);

app.get('/jobs',async(req,res)=>{
    new_job=await job.find({}).lean().exec();
    res.send({new_job});
})



app.listen(port,async()=>{
    connect();
    console.log(`running on port ${port}`);
})