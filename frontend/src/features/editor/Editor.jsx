/*esta sección contiene el editor de contenido  de los universos e historias*/

import {useState, useEffect} from 'react';
import { plainTextToHtml,normalizeHtml } from '../../utils/contentNormalizer.js';

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
        <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 2rem' }}>
            <h2>Escribir un nuevo artículo</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
                <div>
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
                style={{marginTop: '2rem', padding: '0.8rem 2rem', backgroundColor: '#315a84', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer'}}
            >
                Guardar articulo

            </button>
        
        </div>
    )


}