const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

var findOrCreate = require('mongoose-findorcreate')

const User = require('./models/User');
const users = require('./routes/api/users');

const app = express();// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());


// Passport Config
require('./config/passport')(passport);

passport.use(new GoogleStrategy({
  clientID: "661844029597-kc33j74dnm774195dcrb07a1go5urvtg.apps.googleusercontent.com",
  clientSecret: "EzXPIFKN3-bm6aKAriMILWYJ",
  callbackURL: "http://localhost:3000/auth/google/callback"
},
function(accessToken, refreshToken, profile, cb) {

  User.findOne({ googleId: profile.id }).then(user => { 
    if (user) {
    
  } else {
    const newUser = new User({ googleId: profile.id, accessToken: accessToken });
         newUser.save().then((user) => {
          console.log({ user });
          done(null, user); //callback to let passport know that we are done processing
        });
  }
});
  
}
));

app.get('/auth/google',passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', passport.authenticate('google'),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/api/users');
  });


// Use Routes
app.use('/auth/google/callback', users);
app.use('/api/users', users);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
