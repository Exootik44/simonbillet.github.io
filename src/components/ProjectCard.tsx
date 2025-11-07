import { useState } from 'react'

type Props = {
  title: string
  role?: string
  desc: string
  itchUrl?: string

  poster?: string
  videoUrl?: string

  date?: string
  duree?: string
}

export default function ProjectCard({ title, role, desc, itchUrl, poster, videoUrl, date, duree }: Props){
  const [showVideo, setShowVideo] = useState(false)

  const hasVideo = !!videoUrl
  const handleToggle = () => {
    if (hasVideo) setShowVideo(v => !v)
  }

  const meta = [date, duree].filter(Boolean).join(' • ')

  return (
    <article className="project">
      {hasVideo && showVideo ? (
        <video className="media" src={videoUrl} poster={poster} controls muted playsInline />
      ) : (
        <img className="media" src={poster} alt={title} />
      )}

      <h3 style={{marginTop:12}}>{title}</h3>
      {role && <div className="muted" style={{marginTop:2}}>{role}</div>}
      <p style={{marginTop:8}}>{desc}</p>

      <div style={{display:'flex', gap:8, marginTop:10}}>
        {itchUrl && (
          <a className="btn" href={itchUrl} target="_blank" rel="noreferrer">
            Voir sur Itch.io
          </a>
        )}
        {hasVideo && (
          <button className="btn" onClick={handleToggle} style={{background:'rgba(124,92,255,0.2)'}}>
            {showVideo ? 'Afficher l’image' : 'Voir la vidéo'}
          </button>
        )}
      </div>
      {meta && <div className="muted meta">{meta}</div>}
    </article>
  )
}