const express=require('express');
const router=express.Router();
const skill=require('../model/skill.model');

router.get('/',async(req,res)=>{
    new_skill=await skill.find({}).lean().exec();
    res.send({new_skill});
})
router.post('/',async(req,res)=>{
    new_skill=await skill.create(req.body);
    res.status(201).send({new_skill});
})

router.patch('/:id',async(req,res)=>{
    new_skill=await skill.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).send({new_skill});
})

router.get('/:id',async(req,res)=>{
    new_skill=await skill.findById(req.params.id).lean().exec();
    res.send({new_skill});
})

router.delete('/:id',async(req,res)=>{
    new_skill=await skill.findByIdAndDelete(req.params.id).lean().exec();
    res.send({new_skill});
})

module.exports=router;