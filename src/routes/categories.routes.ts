import { Request, Response, Router } from 'express'

import { Category } from '../model/Category';
 const categoriesRoutes = Router()

   const categories: Category[] = [];

 categoriesRoutes.post("/",(request: Request, response: Response)=> {
        const { name, description } = request.body
        
        const category: Category = new Category()
        //   category.name = name;
        //   category.description = description;
        //   category.created_at = new Date()
         
        Object.assign(category, {
            name, 
            description, 
            creatted_at: new Date()
            })

        categories.push(category)

        return response.status(201).json({category});
   })


 export { categoriesRoutes }