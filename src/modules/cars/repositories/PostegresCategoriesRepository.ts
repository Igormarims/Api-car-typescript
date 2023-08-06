import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./IcategoriesRepository";

 

  class PostegresCategoriesReposity implements ICategoriesRepository {
      findByname(name: string): Category {
        console.log(name);
        return  {} ;
      }
     
      list(): Category[] {
         return [];
      }
      create({name, description }: ICreateCategoryDTO): void {
        console.log(name,description);
      }
    

  }


  export { PostegresCategoriesReposity }