import { Category } from "../model/Category";
  
interface ICreateCategoryDTO {
    name: string,
    description: string
}

 interface ICategoriesRepository {
     findByname (name: string): Category | null;
     list():Category[];
     create({name, description }: ICreateCategoryDTO):void;
 }

 export { ICategoriesRepository, ICreateCategoryDTO }