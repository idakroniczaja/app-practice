const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


const Project = require('../models/Project.model')
///GET ROUTE TO DISPLAY ALL THE PROJECTS//

router.get('/projects', (req, res, next) => {
    Project.find()
    .then(allProjects=>{
        console.log(allProjects)
        res.json(allProjects)
    })
    .catch(err=>console.log('Error while getting all the projects',err))

});

router.post('/add-project', (req, res, next) => {
    console.log(req.body)

});

module.exports = router;
