import React from 'react'
import photo1 from './1.jpg'
import photo2 from './2.jpg'
import photo3 from './3.jpg'
import photo4 from './4.jpg'
import photo5 from './5.jpg'
import photo6 from './6.jpg'
import foto from './images.module.css'
const Image = () => {
    const photos = [
    { id: 1, src: photo1, alt: 'Photo 1' },
    { id: 2, src: photo2, alt: 'Photo 2' },
    { id: 3, src: photo3, alt: 'Photo 3' },
    { id: 4, src: photo4, alt: 'Photo 4' },
    { id: 5, src: photo5, alt: 'Photo 5' },
    { id: 6, src: photo6, alt: 'Photo 6' },
    
    ]
  return (
    <ul className={foto.list}>
      {photos.map(photo => (
        <li key={photo.id}>
          <img src={photo.src} alt={photo.alt} className={foto.photo} />
        </li>
      ))}
    </ul>
  )
}

export default Image