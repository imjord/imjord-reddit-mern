const express = require('express');
const app = express();
const PORT = 3001 || process.env.PORT;
const CommentRoutes = require('./routes/CommentRoute');
const PostRoutes = require('./routes/PostRoute');
const UserRoutes = require('./routes/UserRoute.js');
const CommunityRoutes = require('./routes/CommunityRoute.js');
const mongoDB = require('./config/connection');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const path = require('path');
const dotenv = require("dotenv");

dotenv.config();
// fixes
require('./config/passport')(passport);

const session = require('express-session');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000'
    ,credentials: true
}));


// session
app.use(cookieParser());
app.use(session({
    secret: 'imjord',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        collectionName: 'sessions',
        mongoUrl: "mongodb://127.0.0.1:27017/imjordreddit"
    }),
    cookie: { maxAge: 1000 * 60 *60 *24, secure: false }
}));
// passport middleware 
app.use(passport.initialize());
app.use(passport.session());

// routes

app.use("/", PostRoutes);
app.use('/', CommentRoutes);
app.use('/', UserRoutes);
app.use('/', CommunityRoutes);

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
}

);

// db and server
mongoDB.once('open', () => {
     
    app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
    })
})

