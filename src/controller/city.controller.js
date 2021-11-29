const express=require('express');
const city=require('../model/city.model');
const router=express.Router();

router.get('/',async(req,res)=>{
    new_city=await city.find({}).lean().exec();
    res.send({new_city});
})
router.post('/',async(req,res)=>{
    new_city=await city.create(req.body);
    res.status(201).send({new_city});
})

router.patch('/:id',async(req,res)=>{
    new_city=await city.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).send({new_city});
})

router.get('/:id',async(req,res)=>{
    new_city=await city.findById(req.params.id).lean().exec();
    res.send({new_city});
})

router.delete('/:id',async(req,res)=>{
    new_city=await city.findByIdAndDelete(req.params.id).lean().exec();
    res.send({new_city});
})

module.exports=router;