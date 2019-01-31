const express = require('express');
const router = express.Router();
const Category = require('../model/category')

router.get('/',(req,res,next)=>{
    //console.log("Call")
    //console.log(category)
    Category.find()
        .exec()
        .then(docs=>{
            return res.status(200).json({
                count:docs.length,
                categories:docs
            })
        })
        .catch(err=>{
            return res.status(500).json({
                message:err.name,
                error:err
            })
        })
});



module.exports = router;
