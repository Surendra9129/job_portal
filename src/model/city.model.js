const mongoose=require('mongoose');

const citySchema=mongoose.Schema(
    {
       name:{type:String, required:true},
       skill_ids:[
           {
               type:mongoose.Schema.Types.ObjectId,
               ref:"skill",
               required:true,
           }, ],
           job_ids:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"job",
            required:true,
           }
    },
    {
        versionKey:false,
        timestamp:true
    }
)

const city=mongoose.model('city',citySchema);

module.exports=city