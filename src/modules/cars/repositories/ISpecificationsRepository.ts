import { Specification } from "../model/Specificarion";

 
 interface ICreateSpecificationDTO {
    name: string;
    description: string;

 }

 interface ISpecificationsRepository {
     create({ description, name  }:ICreateSpecificationDTO): void;  
     findyByName(name: string): Specification | undefined;
 }


 export { ISpecificationsRepository , ICreateSpecificationDTO}