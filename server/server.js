const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port=3002

mongoose.connect('mongodb+srv://amorna:akwana@cluster0.d1lcqln.mongodb.net/?retryWrites=true&w=majority',(err,done)=>{
if(err){
    console.log(err);
}
if(done){
    console.log('base de données connectée');
}
})

app.listen(port,()=>console.log(`Server demarré sur port:${port}`));

//mongodb+srv://amorna:<password>@cluster0.d1lcqln.mongodb.net/?retryWrites=true&w=majority