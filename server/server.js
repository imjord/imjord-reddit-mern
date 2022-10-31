const express = require('express');
const app = express();
const PORT = 3001;
const CommentRoutes = require('./routes/CommentRoute');
const PostRoutes = require('./routes/PostRoute');
const mongoDB = require('./config/connection');
const cors = require('cors');
const session = require('express-session');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000'
    // ,credentials: true
}));


// session

app.use(session({
    secret: 'imjord',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));


// routes
app.get("/", (req, res) => {
    console.log(req.session);
    res.json({message: req.session})
});
app.use("/", PostRoutes)
app.use('/', CommentRoutes);

// db and server
mongoDB.once('open', () => {
    console.log('mongodb connection established');
    app.listen(PORT, () => {
        console.log(`LISTENING ON ${PORT} BEEP`)
    })
})

