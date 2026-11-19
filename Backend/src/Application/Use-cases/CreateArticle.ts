import { Article } from "../../Domain/Article.js";
import { ArticleRepository } from "../Ports/ArticleRepository.js";

export class CreateArticle {

    constructor(private ArticleRepository: ArticleRepository) {
        this.ArticleRepository = ArticleRepository
    }

    async execute(articleData: Article): Promise<Article> {
        try {

             if (!articleData.title
            || articleData.title.trim() === ''
            || !articleData.content
            || articleData.content.trim() === '') {
            throw new Error("El titulo y el contenido son obligatorios")
            
            }

            return await this.ArticleRepository.save({
            title: articleData.title,
            content: articleData.content,
            author: articleData.author
            })
           
     

        
        } catch (error: unknown) {
            throw new Error('Ha ocurrido un error al validar los datos', {cause:error})
            
        }

    }



}

export class GetAllArticles{

    constructor (private articleRepository: ArticleRepository){}

    async execute() : Promise<Article[]>{
       
        return await this.articleRepository.findAll()

    }
}

