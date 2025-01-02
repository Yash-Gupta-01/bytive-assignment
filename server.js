const path = require('path');
const express = require('express');
const Todo = require('./db/models');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routers/userouters');
const app = express();
const PORT = 4444;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));


app.use('/api/users', userRouter);

app.use('/',require('./routers/todosrouters'));

mongoose.connect('mongodb://127.0.0.1:27017/todo')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    }).catch(err => {
        console.log(err);
    })
