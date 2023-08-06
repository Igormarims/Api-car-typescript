 import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";
    
interface IRequest {
     name: string;
     description: string;
}

   class CreateSpecificationService {
     
         constructor(private specificationsRepository: ISpecificationsRepository) {

         }

        execute({ name, description }:IRequest): void {
             const specificarionAlreadyExists = this.specificationsRepository.findyByName(name);


               if( specificarionAlreadyExists)  {
                    throw new Error("Specifications already exists!")
               }

            this.specificationsRepository.create({ description, name })
        }

   }

   export { CreateSpecificationService }