
import '../index.css' // Assure-toi que le CSS est chargé

type Item = {
  id: string
  title: string
  detail?: string
  date?: string
}

const ITEMS: Item[] = [
  { id: 'bac', title: 'Baccalauréat', detail: 'Bac général — options Maths, Économie, NSI', date: '2016' },
  { id: 'fac', title: "Fac d'économie", detail: "Fac d'économie — 6 mois", date: '2016' },
  { id: 'bts', title: 'BTS SIO', detail: 'BTS SIO — 2 ans', date: '2018' },
  { id: 'gaming', title: 'Bachelor — Gaming Campus', detail: 'Bachelor Gaming Campus — 2 ans', date: '2020' }
  // Ajoute/édite ici tes étapes, du plus ancien (bas) au plus récent (haut)
]

export default function Timeline(){
  return (
    <section className="timeline-section">
      <h2>Parcours</h2>

      <div className="timeline-wrapper" aria-hidden={false}>
        {/* La ligne centrale est créée via CSS ::before */}
        <div className="timeline">
          {ITEMS.map((it, index) => {
            // index 0 = plus ancien -> affiché en bas grâce au column-reverse CSS
            // côté : paire -> droite, impaire -> gauche (ex: 0:right, 1:left, ...)
            const side = index % 2 === 0 ? 'right' : 'left'
            return (
              <div key={it.id} className={`timeline-item ${side}`}>
                <div className="timeline-item-inner">
                  <div className="timeline-card">
                    <div className="timeline-card-head">
                      <div className="timeline-title">{it.title}</div>
                      {it.date && <div className="timeline-date">{it.date}</div>}
                    </div>
                    <div className="timeline-detail">{it.detail}</div>
                  </div>

                  {/* connecteur vers la ligne centrale */}
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
