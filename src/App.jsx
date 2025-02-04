import './App.css'
import Footer from './components/Footer/Footer'
import QRCodeCard from './components/QRCodeCard/index'
import QRImg from './assets/images/image-qr-code.png'

function App() {
  return (
    <main>
      <h1 className="sr-only">QR Code Component</h1>
      <QRCodeCard qrImgSrc={QRImg}>
        <QRCodeCard.Title>
          Improve your front-end skills by building projects
        </QRCodeCard.Title>
        <QRCodeCard.Description>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </QRCodeCard.Description>
      </QRCodeCard>

      <Footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.github.com/BastienWinant" target='_blank'>Bastien Winant</a>.
      </Footer>
    </main>
  )
}

export default App
