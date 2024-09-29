const express=require('express')
const app=express()

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/' , function(req, res,next){
    res.render('index.ejs')
})

app.get('/check' , function(req, res,next){
    console.log(req.query)
    res.send('working')
})

app.post('/check' , function(req, res,next){
    console.log(req.body)
    res.send('working')
})

app.patch('/check' , function(req, res,next){
    console.log(req.query)
    res.send('working')
})

app.put('/check' , function(req, res,next){
    console.log(req.body)
    res.send('working')
})

app.delete('/check' , function(req, res,next){
    console.log(req.body)
    res.send('working')
})

app.listen(3000)