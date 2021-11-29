
const company=require('../model/company.mode');
const express=require('express');
const router=express.Router();

router.get('/',async(req,res)=>{
    new_company=await company.find({openings:{$gt:5}}).lean().exec();
    res.send({new_company});
})
router.post('/',async(req,res)=>{
    new_company=await company.create(req.body);
    res.status(201).send({new_company});
})

router.patch('/:id',async(req,res)=>{
    new_company=await company.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).send({new_company});
})

router.get('/:id',async(req,res)=>{
    new_company=await company.findById(req.params.id).lean().exec();
    res.send({new_company});
})

router.delete('/:id',async(req,res)=>{
    new_company=await company.findByIdAndDelete(req.params.id).lean().exec();
    res.send({new_company});
})

module.exports=router;