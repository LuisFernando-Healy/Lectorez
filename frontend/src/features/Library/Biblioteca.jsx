import { useEffect,useState } from "react";
import './Biblioteca.css'

export default function Biblioteca () {

    const [articles,setArticles]= useState([]);
    const [universes,setUniverses]=useState([]);


    const [activeTab,setActiveTab]=useState('articles')
    const [loading,setLoading]=useState(false)

    useEffect(()=>{

        const fetchLibraryData = async () =>{
            try {
                setLoading(true);

                    const resArticles = await fetch('http://localhost:5000/api/articles')
                    if(resArticles.ok){
                        const dataArticles = await resArticles.json();
                        setArticles(Array.isArray(dataArticles)? dataArticles : dataArticles.data ||[]);

                    }

                    const resUniverses = await fetch('http://localhost:5000/api/universes');
                    if(resUniverses.ok){
                       const dataUniverses = await resUniverses.json() 
                        setUniverses(Array.isArray(dataUniverses)?dataUniverses : dataUniverses.data || []);
                    
                    }


            } catch (error) {
                console.log('Error al cargar la biblioteca',error);
                
            } finally{
                setLoading(false)

            }
        }
        fetchLibraryData();
    },[]);


 

    {/*resumen de la targeta */}

    const getPlainTextPreview = (htmlContent) =>{
        
        if(!htmlContent) return 'sin contenido.....';
        const tepDiv = document.createElement('div');
        tepDiv.innerHTML= htmlContent;
        const text = tepDiv.textContent || tepDiv.innerText || '';
        return text.length > 120 ? text.substring(0,120) + '...' : text;

    }


    return(
        <div className="view-container">

                <header className="view-header">
                    <div>
                        <h1 className="view-title"> Mi biblioteca</h1>
                        <p className="view-subtitle"> Administra tus historias publicadas,borradores y universos narrativos.</p>
                    </div>
                </header>

                <div className="library-tabs">
                    <button className={`tab-btn ${activeTab ==='articles' ? 'active': '' }`} 
                    onClick={()=>setActiveTab('articles')}>
                        Artículos e Historias ({articles.length})
                    </button>

                    <button className={`tab-btn ${activeTab === 'universes' ? 'active' : ''}`} 
                    onClick={()=>setActiveTab('universes')}
                    >
                    Universos ({universes.length})
                    </button>
                </div>
                
                {/*seccion de contenido*/}
               <div className="library-content">

               {
                 loading ? ( <div className="loading-state"> Cargando tu estanceria....</div> 

                 ) : activeTab === 'articles' 
                 
                 ? ( articles.length === 0 ? ( <div className="empty-state">
                            <div className="empty-icon">📚</div>
                            <h2>Tu estantería de historias está vacía</h2>
                            <p>Ve a la sección de escribir para redactar y guardar tu primer artículo en Librox.</p>
                        </div>
                    ) : ( <div className="library-grid"> {  articles.map((article)=>(

                            <article className="library-card" key={article.id || article._id }>
                                <div className="card-badge"> Articulos </div>
                                <h3 className="card-title">{article.title}</h3>
                                <p className="card-excerpt">{getPlainTextPreview(article.content)} </p>
                                    <div className="card-footer">
                                        <span className="card-author">
                                            Por {article.author}
                                        </span>
                                        <button className="btn-read-more"> Leer </button>
                                    </div>
                            </article>

                    ))} </div>)  

                  ) : 
                 
                  ( universes.length === 0 ? 
                  ( <div className="empty-satate">
                    <div className="empty-icon">🪐</div> <br />
                        <h2 style={{color:'gray'}}>No tienes universos guardados aun </h2>
                        <p> crea un universo en la seccion de universos</p>
                    </div>

                  ) : 
                  (<div className="library-grid">
                            {universes.map((universe) => (
                                <article key={universe.id || universe._id} className="library-card universe-card">
                                    <div className="card-badge universe-badge">{universe.genre || 'Universo'}</div>
                                    <h3 className="card-title">{universe.name}</h3>
                                    <p className="card-excerpt">{universe.description || 'Sin descripción definida.'}</p>
                                    <div className="card-footer">
                                        <span className="card-author">Creador: {universe.author }</span>
                                        <button className="btn-read-more">Explorar</button>
                                    </div>
                                </article>
                            ))}
                        </div>)


                  )

               }

               </div>


        </div>
    );



}