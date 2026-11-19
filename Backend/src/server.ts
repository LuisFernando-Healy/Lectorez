import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoConnection } from './Infrastructure/Database/MongoConnection.js';
import ArticleRoutes from './Infrastructure/http/Routes/ArticleRoutes.js'
import UniverseRoutes from './Infrastructure/http/Routes/UniverseRoutes.js'


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MongoURI = process.env.MONGO_URI ?? ''; 
const connectDB = new MongoConnection(MongoURI)

app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true
}));
app.use(express.json());

app.use('/api/articles', ArticleRoutes);
app.use('/api/universes', UniverseRoutes);

app.get('/', (_req, res) => {
    res.json({ status: 'OK', message: 'API Hexagonal de Librox activa' });
});



const startServer = async () => {
    try {
        await connectDB.connect();
        app.listen(PORT, () => {
            console.log(`🚀 Servidor backend Hexagonal corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ No se pudo iniciar el servidor debido al error de conexión con la base de datos.");
    }
};

startServer();