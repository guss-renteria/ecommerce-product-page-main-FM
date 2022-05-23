import { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../reducers/cart.reducer'

import './sneaker.style.scss'
import './sneaker.style_md.scss'

import icon_prev from '../../images/icon-previous.svg'
import icon_next from '../../images/icon-next.svg'
import icon_minus from '../../images/icon-minus.svg'
import icon_plus from '../../images/icon-plus.svg'
import icon_cart from '../../images/icon-cart.svg'

const Sneaker = () => {
  const sneaker = useSelector(state => state.products.data)[0]
  const cart = useSelector(state => state.cart.data)
  const dispatch = useDispatch()

  const imgs_container = useRef()
  const [pos_imgs, setPosImgs] = useState(0)
  const [cart_counter, setCartCounter] = useState(0)

  useEffect(() => {
    const images = document.querySelectorAll('img.img')
    const thumbnails = document.querySelectorAll('div.div-thumbnail')

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
  
  const handleImage = dir => {
    const new_pos = pos_imgs + dir
    setPosImgs(new_pos)
  }

  // * return
  return (
    <div className='sneaker component'>
      <div className='sneaker-container'>
        <div className='sneaker-part'>
          <div className='imgs-container' ref={ imgs_container }>
            { sneaker?.images && sneaker.images.map((image, key) => {
              if(key == 0)
                return <img className='img active' src={ image } alt='image' key={ key }/>
              else
                return <img className='img' src={ image } alt='image' key={ key }/>
            })}
            <button className='prev' onClick={ () => handleImage(-1) }>
              <img src={ icon_prev } alt='icon_prev'/>
            </button>
            <button className='next' onClick={ () => handleImage(1) }>
              <img src={ icon_next } alt='icon_next'/>
            </button>
          </div>
          <div className='imgs-thumbnail'>
            { sneaker?.thumbnails && sneaker.thumbnails.map((image, key) => {
              if(key == 0)
                return <div className='div-thumbnail active' key={ key } onClick={ () => {setPosImgs(key)}}><img className='thumbnail' src={ image } alt='image'/></div>
              else
                return <div className='div-thumbnail' key={ key } onClick={ () => {setPosImgs(key)}}><img className='thumbnail' src={ image } alt='image'/></div>
            })}
          </div>
        </div>
        <div className='sneaker-part'>
          <h3>{ sneaker?.brand }</h3>
          <h2>{ sneaker?.name }</h2>
          <p>{ sneaker?.description }</p>
          <div className='price-container'>
            <div className='price'>{ `$${ parseFloat(sneaker?.price - (sneaker?.price / 100 * sneaker?.discount)).toFixed(2) }` }</div>
            <div className='discount'><span>{ `${ sneaker?.discount }%` }</span></div>
            <div className='old-price'>{ `$${ parseFloat(sneaker?.price).toFixed(2) }` }</div>
          </div>
          <div className='cart-section'>
            <div className='cart-counter'>
              <button className='del' onClick={() => setCartCounter( cart_counter - 1 ) }>
                <img src={ icon_minus } alt='icon-del'/>
              </button>
              <p className='label'>{ cart_counter }</p>
              <button className='add' onClick={() => setCartCounter( cart_counter + 1 ) }>
                <img src={ icon_plus } alt='icon-add'/>
              </button>
            </div>
            <button className='add-to-cart' onClick={() => { dispatch(addItem({code: 'f-snk', data: cart_counter})); setCartCounter(0)} }><img src={ icon_cart } alt='icon-add-to-cart'></img>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sneaker
