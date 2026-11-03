
import Home from './features/landing/home.jsx'

function App() {
 return(
 <div style={{ fontFamily: 'system-ui', margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>

      {/* Barra de Navegación Superior */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '3rem 2rem', /* Padding compacto para que mida ~70px */
        backgroundColor: '#fff', 
        borderBottom: '1px solid #00000037', 
        height: '70px',
        position: 'sticky', 
        top: 0, 
        zIndex: 100 
      }}>
        <strong style={{ padding: '1rem', fontSize: '1.8rem', color: '#2c2b2b', letterSpacing: '-1px' }}>
         Libr<span style={{ color: '#f99d2cf8' }}>ox</span>
        </strong>
        
        <div style={{ flex: 1, maxWidth: '600px', margin: '0 2rem' }}>
             {/* Aquí puedes mantener tu buscador si ya lo conectaste */}
        </div>
        
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <button style={{ padding: '0.5rem 1rem', backgroundColor: '#f99d2cf8', color: '#fffefe', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>
                 Escribe
            </button>
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#786f6f', backgroundImage: 'url(https://i.pravatar.cc/150)', backgroundSize: 'cover' }}></div>
        </div>
      </nav>

      {/* Contenido Principal ajustado al espacio restante (100vh menos los 70px del nav) */}
      <div style={{ height: 'calc(100vh - 70px)' }}>
        <Home />
      </div>
      
 </div>
 );
}

export default App