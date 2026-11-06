
import Home from './features/landing/home.jsx'
import Editor from './features/editor/editor.jsx'
import { useState } from 'react';
import { BrowserRouter,Link,Routes,Route, } from 'react-router-dom';
import Grupos from './features/grupos/grupos.jsx';
import './App.css'

function App() {

  return (

    <BrowserRouter>

     <div className='app-wrapper' >
           {/* Barra de Navegación Superior */}

       <nav className="navbar">
            
            <strong style={{ fontSize: '1.8rem', color: '#2c2b2b', letterSpacing: '-1px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span style={{color:'black'}}>Libr</span><span style={{ color: '#f99d2cf8' }}>ox</span>
              </Link>
            </strong>

            <div style={{ flex: 1, maxWidth: '600px', margin: '0 2rem' }}>
                {/* Aquí puedes mantener tu buscador si ya lo conectaste */}
            </div>


            <div className='navbar-actions'>
                {/* Usamos Link en lugar de button para navegar al Editor */}
                <Link to="/Editor" className="btn-escribir">
                    Escribe
                </Link>
                <div className='user-avatar'></div>
                </div>

       </nav>

        <div className='main-layout'>
            
            {/* MENÚ LATERAL IZQUIERDO GLOBAL (Siempre visible) */}
            <aside className='global-sidebar'>
                {/* Usamos <Link> en lugar de <li> de texto para que React Router haga la navegación sin recargar */}
                <ul className='sidebar-nav'>
                    <Link to="/" className='sidebar-link'>Inicio</Link>
                    <Link to="/grupos" className='sidebar-link'>Grupos de lectura</Link>
                    <Link to="/universos" className='sidebar-link'>Universos</Link>
                    <Link to="/challenges" className='sidebar-link'>LibroxChallenge</Link>
                    <Link to="/biblioteca" className='sidebar-link'>Biblioteca</Link>
                  
                </ul>
            </aside>

            {/* ÁREA DE CONTENIDO DINÁMICO (Aquí se inyectan Home, Editor, etc.) */}
            <div className='routes-container'>
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