// src/App.tsx
import { useEffect, useState } from 'react'
import './index.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Timeline from './pages/Timeline'

export default function App(){
  const [page, setPage] = useState<'home'|'projects'|'timeline'>('home')

  // Keyboard shortcuts: 1 = home, 2 = projects, 3 = timeline
  useEffect(() => {
    function onKey(e: KeyboardEvent){
      if (e.target && (e.target as HTMLElement).tagName === 'INPUT') return
      if (e.key === '1') setPage('home')
      if (e.key === '2') setPage('projects')
      if (e.key === '3') setPage('timeline')
      // navigation rapide: left/right arrows
      if (e.key === 'ArrowRight') {
        setPage(p => p === 'home' ? 'projects' : p === 'projects' ? 'timeline' : 'home')
      }
      if (e.key === 'ArrowLeft') {
        setPage(p => p === 'timeline' ? 'projects' : p === 'projects' ? 'home' : 'timeline')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.title = page === 'home' ? 'Simon — Accueil' : page === 'projects' ? 'Simon — Projets' : 'Simon — Parcours'
  }, [page])

  return (
    <div className="container">
      <Header page={page} setPage={p => setPage(p)} />

      {page === 'home' && <Home />}
      {page === 'projects' && <Projects />}
      {page === 'timeline' && <Timeline />}

      <Footer />
    </div>
  )
}
