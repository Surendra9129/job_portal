const port=5000;
const express=require('express');
const mongoose=require('mongoose');
const app=express();
// app.use(express.json());

const connect=require('./configs/db');

const skillcontroller=require('./controller/skill.controller');
const citycontroller=require('./controller/city.controller');
const companycontroller=require('./controller/conpany.controller');
const jobcontroller=require('./controller/job.controller');



app.use(express.json());
app.use('/jobs',jobcontroller);
app.use('/skills',skillcontroller);
app.use('/cities',citycontroller);
app.use('/companies',companycontroller);



// const jobSchema=mongoose.Schema(
//     {
//        city:{type:String, required:true},
//        skill:{type:String, required:true},
//        email:{type:String, required:false},
//        work_from_home:{type:String, required:true},
//        notice_period:{type:String, required:true},
//        rating:{type:Number, required:true}
//     },
//     {
//         versionKey:false,
//         timestamp:true
//     }
// );

// const job=mongoose.model('job',jobSchema);

// app.get('/jobs',async(req,res)=>{
//     new_job=await job.find({}).lean().exec();
//     res.send({new_job});
// })
// app.post('/jobs',async(req,res)=>{
//     new_job=await job.create(req.body);
//     res.status(201).send({new_job});
// })

// app.patch('/jobs/:id',async(req,res)=>{
//     new_job=await job.findByIdAndUpdate(req.params.id,req.body,{new:true});
//     res.status(201).send({new_job});
// })

// app.get('/jobs/:id',async(req,res)=>{
//     new_job=await job.findById(req.params.id).lean().exec();
//     res.send({new_job});
// })

// app.delete('/jobs/:id',async(req,res)=>{
//     new_job=await job.findByIdAndDelete(req.params.id).lean().exec();
//     res.send({new_job});
// })


// city schema

// const citySchema=mongoose.Schema(
//     {
//        name:{type:String, required:true},
//        skill_ids:[
//            {
//                type:mongoose.Schema.Types.ObjectId,
//                ref:"skill",
//                required:true,
//            }, ],
//            job_ids:{
//             type:mongoose.Schema.Types.ObjectId,
//             ref:"job",
//             required:true,
//            }
//     },
//     {
//         versionKey:false,
//         timestamp:true
//     }
// )

// const city=mongoose.model('city',citySchema);

// app.get('/cities',async(req,res)=>{
//     new_city=await city.find({}).lean().exec();
//     res.send({new_city});
// })
// app.post('/cities',async(req,res)=>{
//     new_city=await city.create(req.body);
//     res.status(201).send({new_city});
// })

// app.patch('/cities/:id',async(req,res)=>{
//     new_city=await city.findByIdAndUpdate(req.params.id,req.body,{new:true});
//     res.status(201).send({new_city});
// })

// app.get('/cities/:id',async(req,res)=>{
//     new_city=await city.findById(req.params.id).lean().exec();
//     res.send({new_city});
// })

// app.delete('/cities/:id',async(req,res)=>{
//     new_city=await city.findByIdAndDelete(req.params.id).lean().exec();
//     res.send({new_city});
// })

// skill schema

// const skillSchema=mongoose.Schema(
//     {
//         name:{type:String, required:true},
//     },
//     {
//         versionKey:false,
//         timestamp:true
//     }
// );

// const skill=mongoose.model('skill',skillSchema);

// app.get('/skills',async(req,res)=>{
//     new_skill=await skill.find({}).lean().exec();
//     res.send({new_skill});
// })
// app.post('/skills',async(req,res)=>{
//     new_skill=await skill.create(req.body);
//     res.status(201).send({new_skill});
// })

// app.patch('/skills/:id',async(req,res)=>{
//     new_skill=await skill.findByIdAndUpdate(req.params.id,req.body,{new:true});
//     res.status(201).send({new_skill});
// })

// app.get('/skills/:id',async(req,res)=>{
//     new_skill=await skill.findById(req.params.id).lean().exec();
//     res.send({new_skill});
// })

// app.delete('/skills/:id',async(req,res)=>{
//     new_skill=await skill.findByIdAndDelete(req.params.id).lean().exec();
//     res.send({new_skill});
// })

// company schema

// const companySchema=mongoose.Schema(
//     {
//          name:{type:String, required:true},
//          location:{type: String, required:true},
//          openings:{type: Number, required:true}
//     },
//     {
//         versionKey:false,
//         timestamp:true
//     }
// )

// const company=mongoose.model('company',companySchema);

// app.get('/companies',async(req,res)=>{
//     new_company=await company.find({openings:{$gt:5}}).lean().exec();
//     res.send({new_company});
// })
// app.post('/companies',async(req,res)=>{
//     new_company=await company.create(req.body);
//     res.status(201).send({new_company});
// })

// app.patch('/companies/:id',async(req,res)=>{
//     new_company=await company.findByIdAndUpdate(req.params.id,req.body,{new:true});
//     res.status(201).send({new_company});
// })

// app.get('/companies/:id',async(req,res)=>{
//     new_company=await company.findById(req.params.id).lean().exec();
//     res.send({new_company});
// })

// app.delete('/companies/:id',async(req,res)=>{
//     new_company=await company.findByIdAndDelete(req.params.id).lean().exec();
//     res.send({new_company});
// })




app.listen(port,async()=>{
    connect();
    console.log(`running on port ${port}`);
})