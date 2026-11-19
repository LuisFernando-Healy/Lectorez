import mongoose,{Schema,Document } from "mongoose";


export interface ArticleDocument extends Document{

    title: string;
    content:string;
    author:string;
    createdAt:Date;

}

const ArticleSchema = new Schema<ArticleDocument>({
    title:{type:String,required:true,trim:true},
    content:{type:String, required:true,trim: true},
    author:{type:String,required: true},
    createdAt:{type:Date, default:Date.now}

})

export const ArticleModel = mongoose.model<ArticleDocument>('Article',ArticleSchema)
