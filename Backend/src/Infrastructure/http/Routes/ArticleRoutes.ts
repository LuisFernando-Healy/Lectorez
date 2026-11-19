import { Router } from 'express';
import { getAllArticles,createNewArticle } from '../../../Infrastructure/http/Controllers/ArticleController.js'

const router = Router();
router.post('/',createNewArticle)
router.get('/',getAllArticles)

export default router