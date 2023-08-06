import { Specification } from "../model/Specificarion";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {

    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }


    create({ description, name }: ICreateSpecificationDTO): void {

        const specificarion: Specification = new Specification()
        Object.assign(specificarion, {
            name,
            description,
            creatted_at: new Date()
        })

        this.specifications.push(specificarion)
    }

    findyByName(name: string): Specification | undefined {
      const specification = this.specifications.find(specification => specification.name === name)
       return specification;
    }

}

export { SpecificationsRepository }