import { Category } from "../model/Category";

// DTO Data transfer object

interface ICreateCategoryDTO {
    name: string,
    description: string
}
 

class CategoriesRepository {
 private categories: Category[]
      
   constructor() {
    this.categories =[];
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

   findByName(name: string): Category | null{
      const category = this.categories.find(category => category.name === name)
          if(category){

              return category;
          }

          return null;

   }
}



export { CategoriesRepository }