/* esta sección contiene el editor de contenido  de los universos e historias*/

import { useState } from 'react';
import { plainTextToHtml, normalizeHtml } from '../../utils/contentNormalizer.js';
import './editor.css';

export default function Editor(){
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [rawText, setRawText] = useState('');
    const [cleanContent, setCleanContent] = useState('');


    const handleInputChange = (e) => {
        const text = e.target.value;
        setRawText(text);

        const htmlDraft = plainTextToHtml(text);
        const finalhtml = normalizeHtml(htmlDraft, true); 
        setCleanContent(finalhtml);
    };


    const handleSave = async () => {
        // Validación en cliente
        if (!title.trim() || !cleanContent.trim()){
            alert('Por favor, completa el título y el contenido antes de guardar.');
            return;
        }

        // LOG DE DEPURACIÓN: Verifica en la consola del navegador que el contenido NO esté vacío
        console.log("📤 Datos a enviar:", { title, content: cleanContent, author: 'Jess' });

        try {
            setLoading(true);
            
            // Petición POST al Backend Hexagonal
            const response = await fetch('http://localhost:5000/api/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    content: cleanContent,
                    author: 'Jess'
                })
            });

            

            const result = await response.json();
            
            if (!response.ok) {
                console.error('Error devuelto por el servidor:', result);
                alert(`Error al guardar: ${result.message || 'Datos inválidos (Bad Request)'}`);
                return;
            }

            if (result.success){
                alert("¡Los datos han sido guardados correctamente en MongoDB Atlas!");
                setTitle('');
                setRawText('');
                setCleanContent('');
            } else {
                alert(`Los datos no se guardaron: ${result.message}`);
            }

        } catch (error) {
            console.error("Error de red al conectar con el backend", error);
            alert("No se pudo conectar con el servidor");
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="editor-container">
            <h2 className="editor-title">Escribir un nuevo artículo</h2>

            <div style={{ marginBottom: '1.5rem' }}>
                <input 
                    type='text' 
                    placeholder='Escribe aqui el titulo' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    style={{ color: 'black', width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #020202', fontSize: '1rem', boxSizing: 'border-box', backgroundColor: '#e8f3f0' }}
                />
            </div>

            <div className="editor-grid">
                <div className="editor-pane">
                    <textarea
                        value={rawText}
                        onChange={handleInputChange}
                        placeholder='Escribe o pega tu historia aqui..'
                        style={{ marginLeft: '20px', width: '800px', height: '400px', padding: '1rem', borderRadius: '10px', backgroundColor: '#e8f3f0', color: '#090909', border: '1px solid #181616' }}
                    />
                </div>
            </div>

            <button
                onClick={handleSave}
                className='btn-save-article'
                disabled={loading}
            >
                {loading ? 'Guardando...' : 'Guardar Artículo'}
            </button>
        </div>
    );
}