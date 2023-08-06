import { Request, Response, Router } from 'express'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';


const specificarionsRoutes = Router();
const specificationsRepository = new SpecificationsRepository()

 specificarionsRoutes.post('/',(request: Request, response: Response)=>{
       const { name, description } = request.body
       const createSpecificationService = new CreateSpecificationService(specificationsRepository)
       createSpecificationService.execute({name, description})
       return response.status(201).send();
 })






export { specificarionsRoutes  }