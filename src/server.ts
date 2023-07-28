import express, { json }  from 'express';

import { categoriesRoutes } from './routes/categories.routes'


const app = express();
 
app.use(express.json());
 
app.use(categoriesRoutes)
  

app.listen(3333,()=> console.log('Servidor na porta -> 3333'))