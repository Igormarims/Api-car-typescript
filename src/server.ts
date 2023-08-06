import express, { json }  from 'express';

import { categoriesRoutes } from './routes/categories.routes'
import { specificarionsRoutes } from './routes/specifications.routes';


const app = express();
 
app.use(express.json());
 
app.use("/categories", categoriesRoutes)
app.use("/specifications", specificarionsRoutes);
  

app.listen(3333,()=> console.log('Servidor na porta -> 3333'))