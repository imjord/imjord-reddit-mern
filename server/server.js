const express = require('express');
const app = express();
const PORT = 3001;
const PostRoutes = require('./routes/PostRoute');
const mongoDB = require('./config/connection');
const cors = require('cors');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000'
    // ,credentials: true
}));
app.use("/", PostRoutes)

mongoDB.once('open', () => {
    console.log('mongodb connection established');
    app.listen(PORT, () => {
        console.log(`LISTENING ON ${PORT} BEEP`)
    })
})

