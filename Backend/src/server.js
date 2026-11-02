
import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
const app = express(); 
const port = process.env.PORT || 4000;

//middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(json());

//conexion a base de datos
connect('mongodb://localhost:27017/Lectorez',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{ console.log('Conectado a la base de datos')})
.catch((err)=>{ console.error('Error al conectar a la base de datos', err)});


app.get('/public/librox/Status',(req,res)=>{
    console.log('Status request received');
    res.status(200).json({ message: 'Server is running' });

})





