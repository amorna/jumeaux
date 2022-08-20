const express=require('express')
const app=express()
const port=3002


app.listen(port,()=>console.log(`Server demarré sur port:${port}`));