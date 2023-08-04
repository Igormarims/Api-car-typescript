import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./IcategoriesRepository";

// DTO Data transfer object


 

class CategoriesRepository implements ICategoriesRepository {
 
  private categories: Category[]
      
   constructor() {
    this.categories =[];
   }
  findByname(name: string): Category | null {
    const category = this.categories.find(category => category.name === name)
    console.log('kkkkkkkkkkk');
    
      if(category){

        return category;
    }

    return null;
  }
   
   create({ name, description }: ICreateCategoryDTO): void {
        
    const category: Category = new Category()  
    Object.assign(category, {
        name, 
        description, 
        creatted_at: new Date()
        })

   this.categories.push(category)
   }

   list(): Category[] {
     return this.categories;
   }


}



export { CategoriesRepository }