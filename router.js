const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CvController");

const fs = require("fs");
router.get("/", getCV);
 router.get("/form", (req, res) => {
     res.render('form');
 });
 
router.post("/form", (req,res) => {
     var name = req.body.username;
     var email = req.body.myemail;
     var add = req.body.address;
     
 
     res.render("cv", { username: name, myemail: email, address: add,educations: edus, experiences: exper,skills: sk, languages: lang});
 
})



module.exports = router;
