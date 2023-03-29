const express = require("express")
const router = express.Router()
const giggerSchema = require('../Connection/Schema/gigerSchema');
const mongoose = require('mongoose');
const Giggers = mongoose.model("giggers", giggerSchema);

router.get("/getGiggers", async (req, res, next) => {
    try {
        const giggers = await Giggers.find({});
        res.json({error:false,data:giggers,msg:"get Giggers successfully."})
    } catch (err) {
        res.json({error:true,msg:err})
    }
})

router.get("/setGiggers", async (req, res, next) => {  
    let temp = 0;
    while(!temp){
        const giggers = new Giggers({
            Type: "Stock Auditing",
            Attendence: "12/20",
            Location: null,
            GiggersAssigned: [],
            Status: "Open",
        });
        temp++;
    }
    await giggers.save()  
    res.json({});
})

module.exports = router