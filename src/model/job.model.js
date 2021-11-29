const mongoose=require('mongoose');


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
        timestamp:true
    }
);

const job=mongoose.model('job',jobSchema);

module.exports=job;