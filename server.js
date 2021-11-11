const express = require('express');
const app = express()
const port = 8080;

app.listen(port,function(){
    console.log(`congraution!! this is ${port} server!`)
});

app.get('/welcome',function(req,res){
    // res.send('hello!!!!');
    res.sendFile(__dirname + '/index.html');
})