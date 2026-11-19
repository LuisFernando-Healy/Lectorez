import { Article } from "../../Domain/Article";

export interface ArticleRepository{
    save(article:Article) : Promise<Article>;
    findAll():Promise<Article[]>
}