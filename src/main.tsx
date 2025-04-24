import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import FreeGamesProvider from './context/free-games-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FreeGamesProvider>
      <App />
    </FreeGamesProvider>
  </StrictMode>
)
