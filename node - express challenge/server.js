var express = require('express')
var path = require('path')

var app = new express();
var port = 3000



app.get('/',(req,res)=>{
    res.sendFile(join(__dirname+'/component/home.html'))
});

app.post('/postExample', (req,res)=>{
    const user_name ='Kenneth Melendez'

    res.send({
        'user_name':user_name
    })

})

app.listen(port,function(){
    console.log('hello from port',port)
});

var app = new express();
var port = 6900

app.get('/',(req,res)=>{
    res.sendFile(join(__dirname+'/component/about.html'))
});

var app = new express();
var port = 8000


app.get('/',(req,res)=>{
    res.sendFile(join(__dirname+'/component/contact.html'))
});
