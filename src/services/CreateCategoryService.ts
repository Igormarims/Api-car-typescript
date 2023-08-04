
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/IcategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}


class CreateCategoryService {

     
    constructor(private categoriesRepository: CategoriesRepository) {}


    
    execute({ name, description }:IRequest): void {

         console.log(name, 'name');
         
        const categoyAlreadyExists  = this.categoriesRepository.findByname(name)
         
        if(categoyAlreadyExists) {
                 throw new Error('Category already exists!')
              }
              this.categoriesRepository.create({ name, description })
    }

}


export { CreateCategoryService }



 
