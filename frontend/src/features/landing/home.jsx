import { useState } from 'react';
import './home.css'
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
        { id: 1, usuario: '@diabloescritor', accion: 'publicó un librox', tiempo: 'hace 18 min' },
        { id: 2, usuario: '@diabloescritor', accion: 'creó un Universo', tiempo: 'hace 30 min' },
        { id: 3, usuario: '@Mcarmen', accion: 'publicó un librox', tiempo: 'hace 44 min' },
    ]);

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

                    {/* Tarjeta Gigante del Reto */}
                  <div className="challenge-card">
                        <span className="card-tag">Cultura</span>
                        <h3 className="card-title">Semana de la Lectura</h3>
                        <p className="card-desc">
                            Esta semana celebramos a quienes leen con atención y son parte de Librox al crear comunidad. Explora las historias que más te interesen...
                        </p>
                        <div className="card-actions">
                            <button className="btn-primary">Aceptar el reto →</button>
                            <button className="btn-outline">Ver detalles y bases</button>
                        </div>
                </div>
            </main>

            {/* 2. PANEL DERECHO (Estático y sin barra de scroll visible) */}
           <aside className="activity-panel">
                <button className="btn-block"> Leer en Librox  ↓ </button>

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

        </div>
    );
}