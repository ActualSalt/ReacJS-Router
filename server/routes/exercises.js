const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//GET
router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercises =>res.json(exercises))
    .catch(err => res.status(400).json('Error: '+err));
});

//POST
router.route('/add').post((req,res)=>{
    const newExercise = new Exercise({
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration,
    });

    newExercise.save()
    .then(()=> res.json('Exercise Added'))
    .catch(err=> res.status(400).json('Error: '+err));
});

router.route('/:id').get((req, res)=>{
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err=> res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req, res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(exercise => res.json('Exercise deleted'))
    .catch(err=> res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise =>{
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);

        exercise.save()
        .then(()=> res.json('Exercise udated'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;