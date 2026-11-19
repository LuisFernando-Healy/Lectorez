import mongoose,{Schema,Document} from "mongoose";

export interface UniverseDocument extends Document{

    name: string;
    description: string;
    genre: string;
    author: string;
    createdAt?: Date;

}

const UniverseSchema = new Schema<UniverseDocument>({
    name: {type:String,unique:true, trim:true, maxlength:70},
    description:{type:String,default:'',maxLength:250},
    genre:{type:String,default:'General'},
    author:{type:String},
    createdAt:{type:Date, default: Date.now}
})

export const UniverseModel = mongoose.model<UniverseDocument> ('Universe',UniverseSchema)