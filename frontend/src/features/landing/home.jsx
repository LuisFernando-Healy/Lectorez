import { useState ,useEffect,useMemo} from 'react';
import {useNavigate} from 'react-router-dom'
import './home.css'



const getPlainExcerpt = (html)=>{

    if(!html) return ''
    const temp = document.createElement('div');
    temp.innerHTML = html
    const text = temp.textContent || temp.innerText || ''
    return text.length > 150 ?  text.substring(0,150) + '...' : text;

}




export default function Home() {
    const [historias] = useState([
        { id: 1, nombre: 'Tu historia', foto: 'https://i.pravatar.cc/150?u=a', isUser: true },
        { id: 2, nombre: 'Librox', foto: 'https://i.pravatar.cc/150?u=b' },
        { id: 3, nombre: 'Carlos', foto: 'https://i.pravatar.cc/150?u=c' },
        { id: 4, nombre: 'Ana', foto: 'https://i.pravatar.cc/150?u=d' },
        { id: 5, nombre: 'Valeria', foto: 'https://i.pravatar.cc/150?u=e' },
        { id: 6, nombre: 'Gabriel', foto: 'https://i.pravatar.cc/150?u=f' },
    ]);
    const [actividad] = useState([
        { id: 1, usuario: '@TheBEST', accion: 'publicó un librox', tiempo: 'hace 18 min' },
        { id: 2, usuario: '@GOAT', accion: 'creó un Universo', tiempo: 'hace 30 min' },
        { id: 3, usuario: '@Mcarmen', accion: 'publicó un librox', tiempo: 'hace 44 min' },
    ]);

   
    const navigate = useNavigate();

    const [articles,setArticles] = useState([]);
    const [universes, setUniverses] = useState([]);
    const [loading,setLoading] = useState(true);
    const [selectArticle,setSelectArticle] = useState(null);


    useEffect(()=>{

            const loadDashboardData = async ()=>{
            try {
                setLoading(true);
                const [resArticles,resUniverses]= await Promise.all([
                    fetch('http://localhost:5000/api/articles'),
                    fetch('http://localhost:5000/api/universes') 
                    
                ]);
                

                if(resArticles.ok ){
                    const dataArticle =  await resArticles.json()
                    setArticles(dataArticle.data || [])
                }


                if(resUniverses.ok) {
                    const dataUnivers = await resUniverses.json();
                    setUniverses(dataUnivers.data || [])

                }

            } catch (error) {
                console.log("Error al cargar los datos en home",error)
                alert("Error al cargar los datos en home")
                
            } finally{
                setLoading(false)
            }
        }
        loadDashboardData()
    },
    [])


    const recentArticles = useMemo(()=>{
        return articles.slice(0,5).map((article)=>({
    
            ...article,
            plainExcerpt:getPlainExcerpt(article.content),
            formattedDate:article.createdAt ? new Date(article.createdAt).toLocaleDateString() : null
            

        }));

    },[articles])


    return (
        <div className='home-container'>
            {/* 1. CONTENIDO PRINCIPAL (Scroll independiente sin barra molesta) */}
            <main className='home-feed'>
                    <h1 className='section-title'>
                        Inicio
                    </h1>

                    {/* Sección de historias */}
                    <div className='stories-carousel'>
                        {historias.map(historia => (
                            <div key={historia.id} className='story-item'>
                                <div className={historia.isUser ? 'story-ring user' : 'story-ring active'}>
                                    <img src={historia.foto} alt={historia.nombre} className='story-avatar' />
                                </div>
                                <span className='story-name'>{historia.nombre}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className='challenge-label'>Librox Challenges</h3>

                    {/* BLOQUE DE TEXTO ALINEADO Y ORDENADO */}
               <div className="challenge-header">
                    <div>
                        <h2 className="challenge-title">Un reto, muchas formas de contarlo.</h2>
                        <p className="challenge-desc">
                            Un tema en común, tu propia voz. Los Librox Challenges son retos de escritura diseñados para crear tu historia, inspirarte y descubrir nuevas perspectivas.
                        </p>
                    </div>
                    <div className="challenge-stats">
                        <span className="stats-number">24</span>
                        <p className="stats-text">Lectores que<br />aceptaron este reto</p>
                    </div>
                </div>

                 

                <div className="challenge-card">
                    <span className="card-tag">Cultura</span>
                    <h3 className="card-title">Semana de la Lectura</h3>
                    <p className="card-desc">
                        Esta semana celebramos a quienes leen con atención y son parte de Librox al crear comunidad. Explora las historias que más te interesen...
                    </p>
                    <div className="card-actions">
                        <button className="btn-primary" onClick={() => navigate('/challenges')}>
                            Aceptar el reto →
                        </button>
                        <button className="btn-outline" onClick={() => navigate('/challenges')}>
                            Ver detalles y bases
                        </button>
                    </div>
                </div>
                <h3 className='challenge-label' style={{ marginTop: '2rem' }}>
                    Historias recientes en Librox ({articles.length})
                </h3>

                {loading ? (
                    <p style={{ color: '#888' }}>Cargando publicaciones...</p>
                ) : recentArticles.length === 0 ? (
                    <div className="challenge-card" style={{ textAlign: 'center' }}>
                        <p className="card-desc">Aún no hay historias publicadas. ¡Sé el primero en escribir una!</p>
                        <button className="btn-primary" onClick={() => navigate('/escribir')}>
                            Escribir historia
                        </button>
                    </div>
                ) : (
                    <div className="recent-articles-list">
                        {recentArticles.map((article) => (
                            <article key={article.id} className="home-article-card">
                                <div>
                                    <span className="article-meta-tag">
                                        {article.author || '@Jess'} {article.formattedDate && `• ${article.formattedDate}`}
                                    </span>
                                    <h4 className="home-article-title">{article.title}</h4>
                                    <p className="home-article-excerpt">{article.plainExcerpt}</p>
                                </div>
                                <button
                                    className="btn-primary"
                                    onClick={() => setSelectArticle(article)}
                                >
                                    Leer
                                </button>
                            </article>
                        ))}
                    </div>
                )}
            </main>

            {/* 2. PANEL DERECHO (Estático y sin barra de scroll visible) */}
           <aside className="activity-panel">
                <button className="btn-block" onClick={() => navigate('/biblioteca')}>
                    Leer en Librox ↓
                </button>

                <div className="widget-card">
                    <h4 className="widget-title">Continúa leyendo</h4>
                    <p style={{ fontWeight: 'bold', margin: '0 0 0.2rem 0' }}>Nuevo artículo en el diario El Occidental</p>
                    <span style={{ fontSize: '0.8rem', color: '#888' }}>@Jess</span>
                    <div className="progress-track">
                        <div className="progress-fill"></div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '0.75rem', color: '#ff9100', marginTop: '5px', fontWeight: 'bold' }}>99%</div>
                </div>

                <div className="widget-card">
                    <h4 className="widget-title">Actividad reciente</h4>
                    <ul className="activity-list">
                        {actividad.map(act => (
                            <li key={act.id} className="activity-item">
                                <div className="activity-dot"></div>
                                <div>
                                    <strong>{act.usuario}</strong> {act.accion}
                                    <div style={{ color: '#888', fontSize: '0.75rem', marginTop: '2px' }}>{act.tiempo}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            {selectArticle && (
                <div className="reader-overlay" onClick={() => setSelectArticle(null)}>
                    <div className="reader-box" onClick={(e) => e.stopPropagation()}>
                        <button className="reader-close" onClick={() => setSelectArticle(null)}>
                            &times;
                        </button>
                        <span className="card-tag">Lectura Librox</span>
                        <h2 className="reader-heading">{selectArticle.title}</h2>
                        <p className="reader-author">Por {selectArticle.author || '@Jess'}</p>
                        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '1rem 0' }} />
                        <div
                            className="reader-content"
                            dangerouslySetInnerHTML={{ __html: selectArticle.content }}
                        />
                    </div>
                </div>
            )}

        </div>
    );
}