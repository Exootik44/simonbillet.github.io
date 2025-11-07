
const LINKEDIN_URL = 'https://www.linkedin.com/in/simon-billet'
const ITCH_URL = 'https://billetsimon.itch.io'
const MAILTO = 'mailto:simonbillet4@gmail.com'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-left muted">© {new Date().getFullYear()} Simon Game Dev</div>
        <div className="footer-links">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-link">
            {/* LinkedIn SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.6 4.11 5.5 3 5.5 1.89 5.5 1 4.6 1 3.5 1 2.38 1.89 1.5 3 1.5 4.11 1.5 4.98 2.38 4.98 3.5ZM.5 8.5H5.5V23H.5V8.5ZM9.5 8.5H14.08V10.6H14.15C14.91 9.43 16.76 8.5 19.01 8.5 23.04 8.5 24 11.2 24 15.39V23H18.99V15.99C18.99 13.89 18.96 11.22 16.04 11.22 13.08 11.22 12.6 13.52 12.6 15.82V23H7.59V8.5H9.5Z" fill="currentColor"/></svg>
          </a>
          <a href={MAILTO} className="icon-link" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/></svg>
          </a>
          <a href={ITCH_URL} target="_blank" rel="noreferrer" className="icon-link" aria-label="Itch.io">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3C6.13 3 3 6.13 3 10C3 13.87 6.13 17 10 17H14C17.87 17 21 13.87 21 10C21 6.13 17.87 3 14 3H10Z" fill="currentColor"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
