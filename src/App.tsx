import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import testImg from './assets/images/testImg.jpg'

export default function App(){
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Simon — Game Dev</div>
        <nav className="muted">Portfolio • Projets • Contact</nav>
      </header>

      <section className="hero">
        <div className="hero-left">
          <h1>Salut — je suis Simon, développeur de jeux</h1>
          <p className="muted">BTS SIO (2 ans) → Bachelor Gaming Campus (2 ans). Je crée des prototypes et des jeux publiés sur Itch.io.</p>
          <a className="btn" href="#projects">Voir mes projets</a>
        </div>
        <div className="hero-right">
          <img src={testImg} alt="mini" style={{width:'100%', borderRadius:12}}/>
        </div>
      </section>

      <section id="projects">
        <h2>Projets</h2>
        <div className="grid">
          <ProjectCard
            title="Nom du Jeu"
            role="Gameplay / Programmation"
            desc="Prototype de plateforme avec mécanique X. Ce projet m'a appris Y et amélioré Z."
            itchUrl="https://itch.io"
            poster={testImg}
          />
          {/* Duplique les ProjectCard pour d'autres projets */}
        </div>
      </section>
    </div>
  )
}