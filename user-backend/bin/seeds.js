const mongoose = require('mongoose');

require('../configs/db.config')

const Project = require('../models/Project.model');

const projects = [
    {
        title: 'project 1',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ',
    author:'Petar Petrovic',
    imageUrl:'image 1'
    },
    {
        title: 'project 2',
    description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
    author:'Mara Maric ',
    imageUrl:'image 2'
    }
    
];

Project.create(projects)
.then(projectsFromDB =>{
    console.log('Created projects from DB',projectsFromDB.length);
    mongoose.connection.close();
})
.catch(err => console.log('Something went wrong with seding DB:',err))




