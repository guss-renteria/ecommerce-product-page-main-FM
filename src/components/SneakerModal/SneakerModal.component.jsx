import { useEffect, useState, useRef } from 'react'

import './sneaker_modal.style.scss'

import icon_prev from '../../images/icon-previous.svg'
import icon_next from '../../images/icon-next.svg'
import icon_exit from '../../images/icon-close-red.svg'

const SneakerModal = ({ sneaker, modal_states }) => {
  const [modal_state, setModalState] = modal_states
  const modal_ref = useRef()
  const [pos_imgs, setPosImgs] = useState(0)

  useEffect(() => {
    const images = document.querySelectorAll('.images-modal > img')
    const thumbnails = document.querySelectorAll('.thumbnails-modal > .thumbnail')

    if(images?.length > 0) {
      //
      if(pos_imgs < 0) {
        setPosImgs(images.length-1)
        return
      }else if(pos_imgs >= images.length) {
        setPosImgs(0)
        return
      }
      //
      for(let i = 0; i < images.length; i++) {
        if(i === pos_imgs) {
          images[i].classList.add('active')
          thumbnails[i].classList.add('active')
        }
        else {
          images[i].classList.remove('active')
          thumbnails[i].classList.remove('active')
        }
      }
    }

  }, [pos_imgs])

  useEffect(() => {
    if(modal_state) {
      modal_ref.current?.classList.add('active')
    }else{
      modal_ref.current?.classList.remove('active')
    }
  }, [modal_state])

  const handleImage = dir => {
    const new_pos = pos_imgs + dir
    setPosImgs(new_pos)
  }

  const genModal = () => {
    return (
      <div className='modal-container'>
        <div className='images-modal'>
          { Object.values(sneaker.images).map((img, key) => {
            if(key == 0)
              return <img src={ img } className='active' key={ key } alt={`img-modal-${key}`}/>
            else
              return <img src={ img } key={ key } alt={`img-modal-${key}`}/>
          }
          ) }
          <button className='exit' onClick={ () => setModalState(false) }> <img src={ icon_exit } alt='exit'/> </button>
          <button className='prev' onClick={ () => handleImage(-1) }><img src={ icon_prev } alt='previous'/></button>
          <button className='next' onClick={ () => handleImage(1) }><img src={ icon_next } alt='next'/></button>
        </div>
        <div className='thumbnails-modal'>
          { Object.values(sneaker.thumbnails).map((img, key) => {
            if(key == 0)
              return <div className='thumbnail active' key={ key } onClick={() => setPosImgs(key)}><img src={ img } alt={`img-modal-${key}`}/> <div className='select'></div> </div>
            else
              return <div className='thumbnail' key={ key } onClick={() => setPosImgs(key)}><img src={ img } alt={`img-modal-${key}`}/> <div className='select'></div> </div>
          }) }
        </div>
      </div>
    )
  }

  // * return
  return (
    <div className='sneaker-modal' ref={ modal_ref }>
      { sneaker && genModal() }
    </div>
  )
}

export default SneakerModal
