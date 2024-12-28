import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'
import { faceIoScriptLoaded } from './faceio/faceAuthen.jsx';

const Main = () => {
  useEffect(() => {
    const faceIoScript = document.createElement('script');
    faceIoScript.src = 'https://cdn.faceio.net/fio.js';
    faceIoScript.async = true;
    faceIoScript.onload = () => faceIoScriptLoaded();
    document.body.appendChild(faceIoScript);

    return () => {
      document.body.removeChild(faceIoScript);
    };
  }, []);
  return <App />;
}


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Main />
  // </StrictMode>,
)
