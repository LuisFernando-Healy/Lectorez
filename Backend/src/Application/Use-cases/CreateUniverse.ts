import { Universe } from "../../Domain/Universe.js";
import { UniverseRepository } from "../Ports/UniverseRepository.js";


export class CreateUniverse{
    constructor(private UniverseRepository: UniverseRepository){
    

    }

    async execute(universe: Universe): Promise<Universe> {

        try {
                if(!universe.name || universe.name.trim()==='' 
                   || !universe.description || universe.description.trim()==='' ){

                    throw new Error ('El nombre y/o la descripcion son obligatorios')
                }   

                return await this.UniverseRepository.save({
                    name: universe.name,
                    description: universe.description, 
                    genre: universe.genre,
                    author: universe.author

                })
                
                

        } catch (error:unknown) {
            throw new Error ('Ah ocurrido un error al validar los datos: =>', {cause: error })
            
        }


    }   
    
    

}

export class GetAllUniverses {

    constructor (private universeRepository: UniverseRepository){}



    async execute() : Promise<Universe[]>{


        return this.universeRepository.findAll()

    }



}