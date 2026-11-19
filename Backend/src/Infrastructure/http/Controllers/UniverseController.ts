import { CreateUniverse, GetAllUniverses } from "../../../Application/Use-cases/CreateUniverse.js";
import { MongoUniverseRepository } from "../../Database/Repositories/MongoUniverseRespository.js";
import { Response,Request } from "express";


const universeRepository = new MongoUniverseRepository()
const createUniverseUseCase = new  CreateUniverse(universeRepository)
const getAllUniverseUseCase = new GetAllUniverses(universeRepository) 


export const CreateNewUniverse = async(req:Request,res:Response) : Promise<void>=>{

    try {
            const {name,description,genre,author} = req.body
            const newUniverse =  await createUniverseUseCase.execute({
              name,description,genre,author
            })

            res.status(201).json({
                success:true,
                message:'Se ha creado un nuevo universo',
                data:newUniverse

            })
    } catch (error:any) {
        res.status(400).json({
            success:false,
            message: error.message ||'Ha ocurrido un error al crear el universo'
        })
    }



}

export const GetAllUniverse = async(req:Request,res:Response ):Promise<void>=>{

    try {
        const response = await getAllUniverseUseCase.execute()
        res.status(201).json({
            success:true,
            message:'Todos los universos',
            data:response

        })

    } catch (error:any) {
        res.status(400).json({
            success:false,
            message: error.message||'Ha ocurrido un error al obtener los universos'
        })
    }

}