const express=require('express')
const mongoose=require('mongoose')
const Etudiant=require('./models/etudiant')
const bodyParser=require('body-parser')
const app=express()
const port=3002

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://amorna:akwana@cluster0.d1lcqln.mongodb.net/?retryWrites=true&w=majority',(err,done)=>{
if(err){
    console.log(err);
}
if(done){
    console.log('base de données connectée');
}
})

app.get('/etudiants',async (req,res)=>{
    try {
        await Etudiant.find({})
        .then(result=>{
            res.send(result)
        })
    } catch (error) {
        console.log(error);
    }
})
app.post('/ajouterEtudiant',async (req,res)=>{
    try{
let new_etudiant=new Etudiant({
    cin:req.body.cin,
    nom:req.body.nom,
    email:req.body.email
});
await new_etudiant.save();
res.send('sauvegarde reussie');
}catch(err){
    console.log(err);
}
});

app.delete('/delete/:id',async (req,res)=>{
    try{

await Etudiant.findOneAndDelete({id:req.params.id})
res.send('supression reussie');
}catch(err){
    console.log(err);
}
});

app.put('/maj/:id',async (req,res)=>{
    try{

await Etudiant.findOneAndUpdate({_id:req.params.id},{nom:req.body.nom})
res.send('mise à jour reussie');
}catch(err){
    console.log(err);
}
});


app.listen(port,()=>console.log(`Server demarré sur port:${port}`));

//mongodb+srv://amorna:<password>@cluster0.d1lcqln.mongodb.net/?retryWrites=true&w=majority