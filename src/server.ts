import express  from 'express';


const app = express();

 
app.get("/",(request, response)=>{
   return response.json({message: 'kkk'});
})
  

app.listen(3333,()=> console.log('Servidor na porta -> 3333'))