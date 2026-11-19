import { Request,Response } from "express";
import { CreateArticle , GetAllArticles } from "../../../Application/Use-cases/CreateArticle.js";
import { MongoArticleRepository } from "../../Database/Repositories/MongoArticleRepository.js";


const articleRepository = new MongoArticleRepository();
const createArticleUseCase = new CreateArticle(articleRepository)
const getALLArticlesUSeCase = new GetAllArticles(articleRepository)


export const createNewArticle = async (req:Request, res:Response): Promise<void> => {
    try {
            const {title,content,author} = req.body

            const newArticle = await createArticleUseCase.execute({
                title: title,
                content:content,
                author:author

            })

            res.status(201).json({
                success:true,
                message:'Articulo guardado',
                data: newArticle

            })

    } catch (error:any) {
        res.status(400).json({
            success:false,
            message:'Ah ocurrido un error' , error
        })
        
    }

}

export const getAllArticles = async (req:Request, res:Response):Promise<void> =>{
    try {

        const articles = await getALLArticlesUSeCase.execute();

        res.status(200).json({
            success:true,
            message:'Articulos',
            data: articles

        })
        
    } catch (error:any) {
        res.status(400).json({
            success:false,
            message: error.message && 'Error al obtener los articulos' 
        })

    }

}
