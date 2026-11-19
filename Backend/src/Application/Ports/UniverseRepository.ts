import { Universe } from "../../Domain/Universe";

export interface UniverseRepository{

    save(universe:Universe) : Promise<Universe>
    findAll(): Promise<Universe[]>



}