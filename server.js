const express = require ("express");
 
const app = express();

app.listen(4500, ()=>{
    console.log("server running on port 4500")
})

app.get('/hello', (req,res) =>{
    res.sendFile(__dirname+'/index.html')
})

app.put('/hello', (req,res) =>{
    res.send("Hello Received  request")
})

app.post('/hello', (req,res) =>{
    res.send("Hello Received post request")
})

app.delete('/hello', (req,res) =>{
    res.send("Hello Received delete request")
})