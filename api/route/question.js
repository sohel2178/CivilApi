const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const Question = require('../model/question')

router.get('/',(req,res,next)=>{
    //console.log("Call")
    const category = req.query.category

    if(category){
        console.log(category)

        Question.find()
            .where('category',category)
            .exec()
            .then(docs=>{
                return res.status(200).json({
                    count:docs.length,
                    questions:docs
                })
            })
            .catch(err=>{
                return res.status(500).json({
                    message:err.name,
                    error:err
                })
            })
    }else{
        Question.find()
        .exec()
        .then(docs=>{
            return res.status(200).json({
                count:docs.length,
                questions:docs
            })
        })
        .catch(err=>{
            return res.status(500).json({
                message:err.name,
                error:err
            })
        })
    }
    //console.log(category)
   
});



module.exports = router;
