import { Article } from "../../../Domain/Article.js";
import { ArticleModel } from "../Models/ArticleModel.js";
import { ArticleRepository } from "../../../Application/Ports/ArticleRepository.js";


export class MongoArticleRepository implements ArticleRepository{

    async save(article: Article): Promise<Article> {
        
                const created = await ArticleModel.create(article)
                return{
                        id: created._id.toString(),
                        title: created.title,
                        content: created.content,
                        author:created.author,
                        createdAt: created.createdAt
                }

       

    }

    async findAll(): Promise<Article[]> {
                const getAll = await ArticleModel.find().sort({createdAt:-1})
                return getAll.map((e)=>({
                    

                    id: e._id.toString(),
                    title: e.title,
                    content: e.content,
                    author:e.author,
                    createdAt: e.createdAt  

                 }));
    }



}