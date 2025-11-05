
import ProjectCard from '../components/ProjectCard' // <-- ajuste le path si besoin

type Project = {
  id: string
  title: string
  role?: string
  desc: string
  itchUrl?: string
  poster?: string
  videoUrl?: string | undefined
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
    itchUrl: 'https://billetsimon.itch.io/zombiefps',
    poster: '/images/imgTest.png',
    //poster: testImg,
    videoUrl: undefined                    // ou '/assets/videos/zombiefps.mp4'
  },
  {
    id: 'pokemon-like',
    title: 'Pokemon-like',
    role: 'C# • Console • Programmation',
    desc: "Pokemon-like",
    itchUrl: '/images/imgTest.png',
    poster: '/assets/images/imgTestPokemon.jpg',
    videoUrl: undefined
  },
  {
    id: 'rugby-ia',
    title: 'Rugby IA',
    role: 'C++ • IA • State machine',
    desc: "Jeu de rugby qui se joue sans touche humaine ( a reformuler mdrr )",
    itchUrl: undefined,
    poster: '/assets/images/tiny-rts.jpg',
    videoUrl: '/assets/videos/tiny-rts-preview.mp4' // si tu veux une courte vidéo
  },
  {
    id: 'rugby-ia',
    title: 'Rugby IA',
    role: 'C++ • IA • State machine',
    desc: "Jeu de rugby qui se joue sans touche humaine ( a reformuler mdrr )",
    itchUrl: undefined,
    poster: '/assets/images/tiny-rts.jpg',
    videoUrl: '/assets/videos/tiny-rts-preview.mp4' // si tu veux une courte vidéo
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
          />
        ))}
      </div>
    </section>
  )
}
