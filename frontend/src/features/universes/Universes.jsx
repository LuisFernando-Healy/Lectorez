import { useState } from "react";
import './Universes.css';

export default function Universes (){

    const [universes,setUniverses]= useState([]);
    const [isModalOpen,setIsmodalOpen]=useState(false)

    const [Name,setName]= useState('')
    const [Description,setDescription]= useState('')
    const [Genere,setGenere]=useState('')

    const [loading,setLoading] =useState(false)




    const handleSaveUniverse = async () => {
        if(!Name.trim()){
            alert("El titulo es obligatorio")
            return;
        }

        try {
            
            setLoading(true);
            const payload = {
                name:Name.trim(),
                description:Description.trim(),
                genre:Genere,
                author:'@Jess'


            }
            console.log("📤 Preparando envío a MongoDB:", payload);

            const response = await fetch('http://localhost:5000/api/universes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const newUniverse = {
                id: Date.now(), 
                ...payload
            };

           
            setUniverses([...universes, newUniverse]);
            
            alert("¡Universo preparado! (Revisa la consola)");
            
            
            setName('');
            setDescription('');
            setGenere('');
            setIsmodalOpen(false);


        } catch (error) {
            console.error("Error al guardar:", error);
            alert("Ocurrió un error al intentar guardar.");
            
        } finally {
            setLoading(false); 
        }
        
    } 



    return(
        <div className="view-container">
            {/*Encabezado */}

            <header className="view-header">
                <div>
                    <h1 className="view-title" >Mis universos</h1>
                    <p> Construye tus mundo, define reglas y organiza tus historias</p>
                </div>
            </header>


            {/*boton de accion  principal (Call to action)*/}
            

            {/*Area de contenido*/}
            <div className="View-content">
                {/**/}

               {universes.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">🪐</div>
                        <h2> Aun no has creado nigun universo </h2>
                        <p> Los universos te permiten agrupar historias que comparten los mismos personajes, lugares o reglas </p>

                    </div>
                ) : (
                   <div className="grid-list">
                        <h3>Tus universos creados:</h3>
                        {/* Imprimimos la lista visualmente */}
                        <ul>
                            {universes.map(u => (
                                <li key={u.id}><strong>{u.name}</strong> - {u.Genre}</li>
                            ))}
                        </ul>
                    </div>
                )}

          </div>
                <br />
                <br />

        <button className="btn-primary" style={{marginTop :'1rem'}} onClick={()=> setIsmodalOpen(true)}> Crear universos</button>

                {/*renderizado de modal si es true se dibuja si es falso lo ignora*/}

                { isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-dark-content">

                                <button className="modal-close-btn" onClick={()=> setIsmodalOpen(false)}>&times;</button>

                            <div>
                                    <h3 style={{color:'withe'}}>Crea un nuevo universo</h3>
                                    <div className="form-group">
                                        <input 
                                            type="text"
                                            placeholder="Ej: La luna creciente"
                                            className="dark-input"
                                            maxLength={70}
                                            value={Name}
                                            onChange={(e)=>setName(e.target.value)}
                                        />
                                        <div className="char-counter">{Name.length}/70 </div>
                                    </div>

                                    <div className="form-group">
                                        <label style={{color:'#2d2929e8'}}> Descripcion </label>
                                        <textarea 
                                            placeholder="Describe tu serie o universo narrativo..."
                                            className="dark-textarea"
                                            maxLength={250}
                                            value={Description}
                                            onChange={(e)=>setDescription(e.target.value)}
                                        >

                                        </textarea>
                                    </div>

                                <div className="form-group">
                                        <label>Género</label>
                                        <select 
                                            className="dark-select" 
                                            value={Genere} 
                                            onChange={(e) => setGenere(e.target.value)}
                                        >
                                            <option value="">Selecciona un género</option>
                                            <option value="Fantasia">Fantasía</option>
                                            <option value="Ciencia Ficcion">Ciencia Ficción</option>
                                            <option value="Misterio">Misterio</option>
                                        </select>
                                </div>

                                <div className="form-group">
                                    <label style={{color:'#2d2929e8'}}>Imagen de fondo</label>
                                    <div className="file-upload-container">
                                        <label className="btn-upload-file" style={{color:'gray'}}>
                                             Seleccionar imagen
                                            <input type="file" accept="image/*" style={{ display: 'none' }} />
                                        </label>
                                    </div>
                                    <span className="file-helper">Formato panorámico 2:1 recomendado para las tarjetas.</span>
                                </div>

                                <div>
                                    <button className="btn-dark-cancel" onClick={()=> setIsmodalOpen(false)}> cancelar </button>
                                    <button className="btn-dark-submit" onClick={ handleSaveUniverse}> {loading?'Guardando..':'Guardar'} </button>
                                </div>

                            </div>

                        </div>
                    </div>
                )}


        </div>
    );





}

