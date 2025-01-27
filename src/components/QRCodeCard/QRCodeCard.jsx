import './QRCodeCard.css'

export default function QRCodeCard({qrImgSrc}) {
  return (
    <figure className='qr-code-card'>
      <img src={qrImgSrc} alt="QR code." className='qr-code-img' />
      <figcaption className='qr-code-caption'>
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </figcaption>
    </figure>
  )
}