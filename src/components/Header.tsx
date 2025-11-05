
type Props = {
  page: 'home' | 'projects' | 'timeline'
  setPage: (p: 'home'|'projects'|'timeline') => void
}

export default function Header({ page, setPage }: Props) {
  return (
    <header className="header">
      <div className="logo">Simon - Game Dev</div>
      <nav>
        <button className={`navbtn ${page === 'home' ? 'active' : ''}`} onClick={() => setPage('home')}>Accueil</button>
        <button className={`navbtn ${page === 'projects' ? 'active' : ''}`} onClick={() => setPage('projects')}>Projets</button>
        <button className={`navbtn ${page === 'timeline' ? 'active' : ''}`} onClick={() => setPage('timeline')}>Parcours</button>
      </nav>
    </header>
  )
}
