/**
 * Created by rupputur on 4/24/2015.
 */

var passport=require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        if(username=="admin" && password=="password")
            return done(null, {username: "admin", password: "password"});
        else if(username!="admin")
            return done(null, false, {message: "The user is not exist"});
        else if(password!="password")
            return done(null, false, {message: "Wrong password"});
    }
));

passport.serializeUser(function(user,done){
   done(null, user.username);
});

passport.deserializeUser(function(username,done){
    done(null, {username: username});
});

module.exports=passport;