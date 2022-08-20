const mongoose=require('mongoose')
const etudiantSchema=mongoose.Schema({
    cin:{
        type:Number,
        required:true
    },
   nom:{
        type:Number,
        required:true
    },
    email:{
        type:Number,
        required:true
    }
});
module.exports=Etudiant=mongoose.model('etudiant',etudiantSchema);