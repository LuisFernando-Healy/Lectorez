import mongoose from "mongoose";

export class MongoConnection{

    constructor( private readonly uri: string){
        if(!uri){
            throw new Error("El URI de mongo es obligatorio")
        }
     }

    async connect() : Promise<void> {
        try {
            await mongoose.connect(this.uri);
            console.log("Conectado a mongo =>");
        } catch (error: unknown) {
            console.error("❌ Error al conectar con MongoDB:", error);
            throw error;
        }
    }

    async disconnect() : Promise<void>{

        await mongoose.disconnect();
        console.log('Cerro Mongo atlas')

    }
    
}

