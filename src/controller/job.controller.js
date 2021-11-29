const express=require('express');
const job=require('../model/job.model');
const router=express.Router();

router.get('/',async(req,res)=>{
    new_job=await job.find({}).lean().exec();
    res.send({new_job});
})
router.post('/',async(req,res)=>{
    new_job=await job.create(req.body);
    res.status(201).send({new_job});
})

router.patch('/:id',async(req,res)=>{
    new_job=await job.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).send({new_job});
})

router.get('/:id',async(req,res)=>{
    new_job=await job.findById(req.params.id).lean().exec();
    res.send({new_job});
})

router.delete('/:id',async(req,res)=>{
    new_job=await job.findByIdAndDelete(req.params.id).lean().exec();
    res.send({new_job});
})

module.exports=router;
