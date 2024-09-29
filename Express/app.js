const express=require('express')
const app=express()

const expressSession = require('express-session')

// app.use(expressSession({
//     secret:'random stuff', 
//     resave:false, 
//     saveUninitialized: false
// }));

// app.use(function(req, res,next){
//     console.log("hey hello kaise hoo??")
//     next()
// })

// app.use(function(req, res,next){
//     console.log("hey hello??")
//     next()
// })

// app.get('/' , function(req, res,next){
//     res.send("hello how are you bro???")
// })

// app.get('/create' , function(req, res,next){
//     req.session.polo='raushan'
//     res.send("done")
// })

app.get('/check' , function(req, res,next){
    console.log(req.session.polo);
})


app.listen(4000)