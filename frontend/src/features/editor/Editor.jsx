/*esta sección contiene el editor de contenido  de los universos e historias*/

import {useState, useEffect} from 'react';
import { plainTextToHtml,normalizeHtml } from '../../utils/contentNormalizer.js';
import './editor.css';
export default function Editor(){

    const [rawText, setRawText] = useState('');
    const [cleanContent, setCleanContent] = useState('');

// Esta función se dispara cada vez que el usuario escribe o pega texto
    const handleInputChange = (e) =>{

        const text = e.target.value;
        setRawText(text);

        const htmlDraft = plainTextToHtml(text);
        const finalhtml =  normalizeHtml(htmlDraft);
        setCleanContent(finalhtml);
    }


//Pasamos el texto por nuestra capa  de integridad (clean code)
  
    const handleSave = () => {
        console.log("contenido limpio",cleanContent);
        alert("articulo procesado");
    };


    return(
        <div className="editor-container">
            <h2 className="editor-title">Escribir un nuevo artículo</h2>
            <div className="editor-grid">
                <div className="editor-pane">
                    <h3>Editor de texto</h3>
                    <textarea
                    value={rawText}
                    onChange={handleInputChange}
                    placeholder='Escribe o pega tu historia aqui..'
                    style={{marginLeft:'20px', width:'800px', height:'300px',padding:'1rem',borderRadius:'8px',backgroundColor:'#e6eef1', color: '#000000', border: '1px solid #444'}}
                    />
                      
                </div>
            </div>

            <button
                onClick={handleSave}
                className='btn-save-article'>
                Guardar articulo

            </button>
        
        </div>
    )


}