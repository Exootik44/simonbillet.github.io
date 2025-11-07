// src/pages/Timeline.tsx
import React from 'react'
import '../index.css' // assure-toi que ton index.css contient les styles fournis ci-dessous

type Item = {
  id: string
  title: string
  role?: string
  desc?: string
  date?: string // ex: "2022 → 2024"
}

/**
 * Ordre du tableau : du plus ancien (index 0) au plus récent (dernier élément).
 * Le rendu visuel place le plus ancien en bas et le plus récent en haut.
 */
const ITEMS: Item[] = [
  { id: 'naissance', 
    title: 'Naissance', 
    role: 'Vivre - Respirer - Pleurer', 
    desc: 'Premier chapitre, premières curiosités', 
    date: '2003 - 2003' 
  },
  { id: 'enfance', 
    title: 'Enfance', 
    role: 'Courir - Decouvrir - Jouer', 
    desc: 'Enfance heureuse à la campagne avec mes frères', 
    date: '2003 - 2014' 
  },
  { id: 'college', 
    title: 'Collège', 
    role: 'Castor Informatique - Amitiés', 
    desc: "Petit établissement de campagne, découverte du concours castor informatique et création d'amitiés solides ", 
    date: '2014 - 2018' 
  },
  { id: 'bac', 
    title: 'Baccalauréat', 
    role: 'Général - Maths / Éco / NSI', 
    desc: "Des sciences et de l'informatique dans un lycée en ville", 
    date: '2018 - 2021' 
  },
  { id: 'fac', 
    title: "Fac d'économie", 
    role: 'Economie - Développement personnel', 
    desc: "Expérience utile pour apprendre a me connaître, réorientation assumée", 
    date: '2021 - 2022' 
  },
  { id: 'bts', 
    title: 'BTS SIO', 
    role: 'Base solides en dev full stack',
    desc: 'Formation technique en systèmes informatiques et réseaux', 
    date: '2022 - 2024' 
  },
  { id: 'gaming', 
    title: 'Bachelor dev jeux vidéo', 
    role: "dev gameplay - gestion de projet - travail d'équipe", 
    desc: 'Bachelor orienté jeux vidéo, pédagogie par projets', 
    date: '2024 - 2026' }
]

export default function Timeline(){
  return (
    <section className="timeline-section">
      <h2>Parcours</h2>

      <div className="timeline-wrapper" aria-hidden={false}>
        <div className="timeline">
          {ITEMS.map((it, index) => {
            /**
             * Pour garantir l'alternance visuelle (un sur deux à droite/gauche),
             * on calcule le "visualIndex" correspondant à la position visuelle
             * du composant (0 = bas le plus ancien). Comme le CSS utilise
             * column-reverse, la position visuelle est (ITEMS.length - 1 - index).
             */
            const visualIndex = ITEMS.length - 1 - index
            const side = visualIndex % 2 === 0 ? 'right' : 'left'

            return (
              <div key={it.id} className={`timeline-item ${side}`}>
                <div className="timeline-item-inner">
                  {/* Carte contenant les informations */}
                  <div className="timeline-card">
                    <div className="timeline-card-head">
                      <div>
                        <div className="timeline-title">{it.title}</div>
                        {it.role && <div className="timeline-role muted" style={{marginTop:4}}>{it.role}</div>}
                      </div>
                      {it.date && <div className="timeline-date">{it.date}</div>}
                    </div>
                    {it.desc && <div className="timeline-detail" style={{marginTop:8}}>{it.desc}</div>}
                  </div>

                  {/* Connecteur visuel vers la branche */}
                  <div className="timeline-connector" aria-hidden="true">
                    <span className="timeline-dot" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
