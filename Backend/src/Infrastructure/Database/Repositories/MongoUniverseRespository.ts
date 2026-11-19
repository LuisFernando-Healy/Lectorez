import { Universe } from "../../../Domain/Universe";
import { UniverseRepository } from "../../../Application/Ports/UniverseRepository";
import { UniverseModel } from "../Models/UniverseModel";



export class MongoUniverseRepository implements UniverseRepository{

    async save(universe: Universe): Promise<Universe> {
            const created = await UniverseModel.create(universe)
            return {
                id: created._id.toString(),
                name:created.name,
                description:created.description,
                genre: created.genre,
                author: created.author,
                createdAt: created.createdAt
            }


    }

    async findAll(): Promise<Universe[]> {
        const result = await UniverseModel.find()
        return result.map((r)=>({
            id: r._id.toString(),
            name:r.name,
            description:r.description,
            genre: r.genre,
            author: r.author,
            createdAt: r.createdAt


        }))
    }


}