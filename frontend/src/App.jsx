
import Home from './features/landing/home.jsx'
import Editor from './features/editor/editor.jsx'
import { useState } from 'react';
import { BrowserRouter,Link,Routes,Route, } from 'react-router-dom';
import Grupos from './features/grupos/grupos.jsx';

function App() {

  return (

    <BrowserRouter>

     <div style={{ fontFamily: 'system-ui', margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
           {/* Barra de Navegación Superior */}

       <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 2rem', backgroundColor: '#fff', borderBottom: '1px solid #00000037', height: '70px', position: 'sticky', top: 0, zIndex: 100 }}>
            
            <strong style={{ fontSize: '1.8rem', color: '#2c2b2b', letterSpacing: '-1px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span style={{color:'black'}}>Libr</span><span style={{ color: '#f99d2cf8' }}>ox</span>
              </Link>
            </strong>

            <div style={{ flex: 1, maxWidth: '600px', margin: '0 2rem' }}>
                {/* Aquí puedes mantener tu buscador si ya lo conectaste */}
            </div>


            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                {/* Usamos Link en lugar de button para navegar al Editor */}
                <Link to="/Editor" style={{ padding: '0.5rem 1rem', backgroundColor: '#f99d2cf8', color: '#fffefe', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'none' }}>
                    Escribe
                </Link>
                <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#786f6f', backgroundImage: 'url(https://i.pravatar.cc/150)', backgroundSize: 'cover' }}></div>
            </div>

       </nav>

        <div style={{ display: 'flex', backgroundColor: '#f4f6f8', height: 'calc(100vh - 70px)', overflow: 'hidden' }}>
            
            {/* MENÚ LATERAL IZQUIERDO GLOBAL (Siempre visible) */}
            <aside style={{ 
                width: '220px', padding: '2rem 1rem', borderRight: '1px solid #abaaaa82', 
                backgroundColor: '#fff', overflowY: 'auto',
                scrollbarWidth: 'none', msOverflowStyle: 'none' 
            }}>
                {/* Usamos <Link> en lugar de <li> de texto para que React Router haga la navegación sin recargar */}
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <Link to="/" style={{ textDecoration: 'none', fontFamily: 'system-ui', display: 'flex', alignItems: 'center', gap: '10px', color: '#fcac2c', fontWeight: 'bold', cursor: 'pointer' }}>Inicio</Link>
                    <Link to="/grupos" style={{ textDecoration: 'none', fontFamily: 'system-ui', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#736f6fde', fontWeight: 'bold' }}>Grupos de lectura</Link>
                    <Link to="/universos" style={{ textDecoration: 'none', fontFamily: 'system-ui', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#736f6fde', fontWeight: 'bold' }}>Universos</Link>
                    <Link to="/challenges" style={{ textDecoration: 'none', fontFamily: 'system-ui', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#736f6fde', fontWeight: 'bold' }}>LibroxChallenge</Link>
                    <Link to="/biblioteca" style={{ textDecoration: 'none', fontFamily: 'system-ui', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#736f6fde', fontWeight: 'bold' }}>Biblioteca</Link>
                  
                </ul>
            </aside>

            {/* ÁREA DE CONTENIDO DINÁMICO (Aquí se inyectan Home, Editor, etc.) */}
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Editor" element={<Editor />} />
                    <Route path="/grupos" element={<Grupos />} />  
                </Routes>
            </div>
           

        </div>

        


  </div>
    </BrowserRouter>
  );
}

export default App