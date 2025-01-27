import './App.css'
import './components/QRCodeCard/QRCodeCard'
import Footer from './components/Footer/Footer'
import QRCodeCard from './components/QRCodeCard/QRCodeCard'
import QRImg from './assets/images/image-qr-code.png'

function App() {
  return (
    <main>
      <QRCodeCard qrImgSrc={QRImg} />
      <Footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.github.com/BastienWinant" target='_blank'>Bastien Winant</a>.
      </Footer>
    </main>
  )
}

export default App
