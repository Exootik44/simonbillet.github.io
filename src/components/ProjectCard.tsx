
type Props = {
  title: string
  role?: string
  desc: string
  itchUrl?: string
  poster?: string
  videoUrl?: string
}

export default function ProjectCard({title, role, desc, itchUrl, poster, videoUrl}: Props){
  return (
    <article className="project">
      {videoUrl ? (
        <video className="media" src={videoUrl} poster={poster} controls muted playsInline />
      ) : (
        <img className="media" src={poster} alt={title} />
      )}
      <h3 style={{marginTop:12}}>{title}</h3>
      {role && <div className="muted">{role}</div>}
      <p style={{marginTop:8}}>{desc}</p>
      {itchUrl && <a className="btn" href={itchUrl} target="_blank" rel="noreferrer" style={{marginTop:10, display:'inline-block'}}>Voir sur Itch.io →</a>}
    </article>
  )
}
