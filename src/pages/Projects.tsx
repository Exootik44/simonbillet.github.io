
import ProjectCard from '../components/ProjectCard' // <-- ajuste le path si besoin

type Project = {
  id: string
  title: string
  role?: string
  desc: string
  itchUrl?: string
  poster?: string
  videoUrl?: string | undefined
  date?: string
  duree?: string
}

/**
 * Liste des projets — modifie directement ce tableau pour ajouter/éditer un projet.
 * Astuce : place les images/vidéos dans `public/assets/...` et utilise les chemins
 * absolus commençant par `/assets/...`
 */
const PROJECTS: Project[] = [
  {
    id: 'zombie-fps',
    title: 'Zombie FPS',
    role: 'Unity • Programmation',
    desc: "FPS créé sur Unity : système de vagues, plusieurs armes, IA basique.",
    itchUrl: undefined,
    poster: '/images/imgTest.png',
    videoUrl: '/assets/videos/tiny-rts-preview.mp4',
    date: 'Octobre 2025',
    duree: '1 semaine'
  },
  {
    id: 'pokemon-like',
    title: 'Pokemon-like',
    role: 'C# • Console • Programmation',
    desc: "Pokemon-like",
    itchUrl: 'https://billetsimon.itch.io/zombiefps',
    poster: '/images/imgTestPokemon.jpg',
    videoUrl: undefined,
    date: 'Septembre 2025',
    duree: '1 semaine'
  },
  {
    id: 'rugby-ia',
    title: 'Rugby IA',
    role: 'C++ • IA • State machine',
    desc: "Jeu de rugby qui se joue sans touche humaine ( a reformuler mdrr )",
    itchUrl: 'https://billetsimon.itch.io/zombiefps',
    poster: '/assets/images/tiny-rts.jpg',
    videoUrl: '/assets/videos/tiny-rts-preview.mp4',
    date: 'Novembre 2024',
    duree: '1 semaine'
  },
  {
    id: 'rugby-ia',
    title: 'Rugby IA',
    role: 'C++ • IA • State machine',
    desc: "Jeu de rugby qui se joue sans touche humaine ( a reformuler mdrr )",
    itchUrl: 'https://billetsimon.itch.io/zombiefps',
    poster: '/assets/images/tiny-rts.jpg',
    videoUrl: '/assets/videos/tiny-rts-preview.mp4',
    date: 'Octobre 2025',
    duree: '1 semaine'
  }
  // <-- Ajoute d'autres objets projet ici
]

export default function Projects() {
  return (
    <section id="projects">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12}}>
        <h2>Projets</h2>
      </div>

      <div className="grid" style={{marginTop:16}}>
        {PROJECTS.map(p => (
          <ProjectCard
            key={p.id}
            title={p.title}
            role={p.role}
            desc={p.desc}
            itchUrl={p.itchUrl}
            poster={p.poster}
            videoUrl={p.videoUrl}
            date={p.date}
            duree={p.duree}
          />
        ))}
      </div>
    </section>
  )
}
