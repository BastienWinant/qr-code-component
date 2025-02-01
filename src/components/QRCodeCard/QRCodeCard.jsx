export default function QRCodeCard({qrImgSrc, children}) {
  return (
    <figure className='qr-code-card'>
      <img src={qrImgSrc} alt='QR code.' className='qr-code-img' />
      <figcaption className='qr-code-caption'>
        {children}
      </figcaption>
    </figure>
  )
}