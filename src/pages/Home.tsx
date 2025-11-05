
export default function Home(){
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Salut, je suis Simon, développeur de jeux</h1>
        <p className="muted">BTS SIO (2 ans) → Bachelor Gaming Campus (2 ans). Je crée des prototypes et des jeux publiés sur Itch.io.</p>
        <p>Passionné par la création de jeux vidéo, je souhaite contribuer à des projets toujours plus ambitieux. Fort de 4 ans d’expérience en développement dont 2 ans spécifiquement en création de jeux vidéo, j’allie compétences techniques et capacités de communication pour être efficace en équipe.</p>
        <a className="btn" href="#projects">Voir mes projets</a>
      </div>
      <div className="hero-right">
        <div className="profile-card">
          <img src="/images/imgTest.png" alt="Simon portrait" style={{width:'100%', borderRadius:12}}/>
          <h4 style={{marginTop:12}}>Simon — Game Dev</h4>
          <p className="muted">Développeur • Prototypes </p>
        </div>
      </div>
    </section>
  )
}
