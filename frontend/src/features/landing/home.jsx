import { useState } from 'react';

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
        <div style={{ 
            display: 'flex', 
            backgroundColor: '#f4f6f8', 
            height: 'calc(100vh - 70px)', 
            overflow: 'hidden', 
            color: '#333' 
        }}>

          

            {/* 1. CONTENIDO PRINCIPAL (Scroll independiente sin barra molesta) */}
            <main style={{ 
                    flex: 1, padding: '2.5rem 4rem', overflowY: 'auto', height: '100%',
                    scrollbarWidth: 'none', msOverflowStyle: 'none' // Ocultar scroll manteniendo funcionalidad
                }}>
                    <h1 style={{ color: '#352f2fdc', fontSize: '1.6rem', marginBottom: '1.5rem' }}>
                        Inicio
                    </h1>

                    {/* Sección de historias */}
                    <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '2.5rem', scrollbarWidth: 'none' }}>
                        {historias.map(historia => (
                            <div key={historia.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px' }}>
                                <div style={{
                                    width: '64px', height: '64px', borderRadius: '50%', padding: '3px',
                                    background: historia.isUser ? '#ddd' : 'linear-gradient(45deg, #ffb700, #ffd000)'
                                }}>
                                    <img src={historia.foto} alt={historia.nombre} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff' }} />
                                </div>
                                <span style={{ fontSize: '0.75rem', marginTop: '5px', color: '#555' }}>{historia.nombre}</span>
                            </div>
                        ))}
                    </div>

                    <h3 style={{ color: '#ff9100', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Librox Challenges</h3>

                    {/* BLOQUE DE TEXTO ALINEADO Y ORDENADO */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <div style={{ maxWidth: '650px' }}>
                            <h2 style={{ color: '#2c2b2b', fontSize: '2.3rem', margin: '0 0 0.8rem 0', lineHeight: '1.2' }}>
                                Un reto, muchas formas de contarlo.
                            </h2>
                            {/* Texto justificado y ordenado */}
                            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', textAlign: 'justify', margin: 0 }}>
                                Un tema en común, tu propia voz. Los Librox Challenges son retos de escritura diseñados para crear tu historia, inspirarte y descubrir nuevas perspectivas compartidas con la comunidad.
                            </p>
                        </div>
                        <div style={{ textAlign: 'center', paddingLeft: '2rem' }}>
                            <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#2c2b2b' }}>24</span>
                            <p style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', lineHeight: '1.2', margin: '5px 0 0 0' }}>Lectores que<br />aceptaron este reto</p>
                        </div>
                    </div>

                    {/* Tarjeta Gigante del Reto */}
                    <div style={{
                        position: 'relative', borderRadius: '15px', overflow: 'hidden', height: '350px', marginBottom: '2rem',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2)), url("https://picsum.photos/800/400?nature") center/cover',
                        color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem'
                    }}>
                        <span style={{ fontSize: '0.85rem', color: '#fcac2c', fontWeight: 'bold' }}>Cultura</span>
                        <h3 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>Semana de la Lectura</h3>
                        <p style={{ maxWidth: '600px', fontSize: '1rem', fontStyle: 'italic', marginBottom: '1.5rem', opacity: 0.9, textAlign: 'justify' }}>
                            Esta semana celebramos a quienes leen con atención y son parte de Librox al crear comunidad. Explora las historias que más te interesen...
                        </p>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <button style={{ padding: '0.8rem 1.5rem', borderRadius: '25px', border: 'none', backgroundColor: '#ff9100ea', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
                                Aceptar el reto →
                            </button>
                            <button style={{ padding: '0.8rem 1.5rem', borderRadius: '25px', border: '1px solid #fff', backgroundColor: 'transparent', color: '#fff', cursor: 'pointer' }}>
                                Ver detalles y bases
                            </button>
                        </div>
                    </div>
            </main>

            {/* 2. PANEL DERECHO (Estático y sin barra de scroll visible) */}
            <aside style={{ 
                    width: '320px', padding: '2rem 1.5rem', backgroundColor: '#f9f9f9', 
                    borderLeft: '1px solid #ddd', overflowY: 'auto',
                    scrollbarWidth: 'none', msOverflowStyle: 'none' 
                }}>
                    <button style={{ width: '100%', padding: '1rem', backgroundColor: '#ff9100ea', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '1rem', marginBottom: '2rem', cursor: 'pointer' }}>
                        📖 Leer en Librox ↓
                    </button>

                    <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
                        <h4 style={{ margin: '0 0 1rem 0', color: '#333' }}>Continúa leyendo</h4>
                        <p style={{ fontWeight: 'bold', margin: '0 0 0.2rem 0' }}>Nuevo artículo en el diario El Occidental</p>
                        <span style={{ fontSize: '0.8rem', color: '#888' }}>@Jess</span>
                        <div style={{ marginTop: '1rem', height: '4px', backgroundColor: '#eee', borderRadius: '2px', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '99%', backgroundColor: '#fcac2c', borderRadius: '2px' }}></div>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '0.75rem', color: '#ff9100', marginTop: '5px', fontWeight: 'bold' }}>99%</div>
                    </div>

                    <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ margin: '0 0 1rem 0', color: '#333' }}>Actividad reciente</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {actividad.map(act => (
                                <li key={act.id} style={{ display: 'flex', gap: '10px', fontSize: '0.85rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fcac2c', marginTop: '6px' }}></div>
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