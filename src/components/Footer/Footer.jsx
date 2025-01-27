import './Footer.css'

export default function Footer({children}) {
  return (
    <footer className="footer">
      <div class="footer-inner">
        {children}
      </div>
    </footer>
  )
}