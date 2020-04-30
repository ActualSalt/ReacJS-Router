const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());


//Connect DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true , useUnifiedTopology: true }
    );
//Make connection
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB Connected");
})

const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises')
app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});