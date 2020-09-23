// The server.js file contains the logic of backend. Database connections,  
// setting up routes and starting the server, all takes place inside server.js


// Requiring all the dependencies required for setting up backend
const express = require('express');     // Express is an javascript backend library which works on NodeJS and helps in building the server
const cors = require('cors');           // Cors is an middleware JS backend library
const mongoose = require('mongoose');   // Mongoose is an MongoDB connector for NodeJS

require('dotenv').config();             // Requiring the backend variables stored in .env file

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());                // it will return and accept the data in .json format

const uri = process.env.MONGO_URI;      
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log('Server is running on port: ', port);
});
