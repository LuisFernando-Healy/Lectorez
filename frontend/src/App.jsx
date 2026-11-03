import { useEffect, useState } from 'react'
import api from './services/api.js'
import { plainTextToHtml } from './utils/contentNormalizer.js'
import './App.css'

function App() {
 return(
  <div style={{ backgroundColor: '#1a1a1a', color: '#ffffff', minHeight: '100vh', fontFamily: 'system-ui' }}>

      <nav style={{ padding: '1rem 2rem', backgroundColor: '#000', borderBottom: '1px solid #333' }}>
        <strong>Librox Studio</strong>
      </nav>

      <Landing />
      
      <hr style={{ borderColor: '#333', margin: '4rem 0' }} />
      
      <Editor />
    </div>
  );
 
}


export default App
