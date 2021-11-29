const mongoose= require('mongoose');

const skillSchema=mongoose.Schema(
    {
        name:{type:String, required:true},
    },
    {
        versionKey:false,
        timestamp:true
    }
);

const skill=mongoose.model('skill',skillSchema);

module.exports=skill;