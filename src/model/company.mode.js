
const mongoose=require('mongoose');

const companySchema=mongoose.Schema(
    {
         name:{type:String, required:true},
         location:{type: String, required:true},
         openings:{type: Number, required:true}
    },
    {
        versionKey:false,
        timestamp:true
    }
)

const company=mongoose.model('company',companySchema);
module.exports=company;