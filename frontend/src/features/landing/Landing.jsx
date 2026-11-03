import { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Landing() {

    const [data, setData] = useState({ topUsers: [], featuredUniverses: [], activeChallenges: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/discovery')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => { console.error("Algo malio sal: ", error); setLoading(false) })
    }, []);


    if (loading) return <p style={{ textAlign: 'center', }}> Cargando el universo librox </p>

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
            <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}> Descrubre librox</h1>
                <p>Unete a nuestra comunidad de lectores y escritores</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '2rem' }}>
                    {data.topUsers.map(user => (
                        <img 
                            key={user.id} 
                            src={user.foto} 
                            alt={user.nombre} 
                            title={user.nombre}
                            style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #fff' }}
                        />
                    ))}
                </div>
            </section>

            <section>
                <h2 style={{}}> Universos destacados </h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '2rem' }}>
                    {data.featuredUniverses.map(universe => 
                        (<div key={universe.id} style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={universe.portada} alt={universe.titulo} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                        <h3 style={{ padding: '1rem', margin: 0, fontSize: '1.2rem' }}>{universe.titulo}</h3>
                    </div>))
                    }
                   
                </div>
            </section>
        </div>

    );
}