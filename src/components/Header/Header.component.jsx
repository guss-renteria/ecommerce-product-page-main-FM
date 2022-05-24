import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import './header.style.scss'
import './header.style_md.scss'

import CartWidget from '../CartWidget/CartWidget.component'

import logo from '../../images/logo.svg'
import icon_cart from '../../images/icon-cart.svg'
import image_avatar from '../../images/image-avatar.png'
import icon_menu from '../../images/icon-menu.svg'
import icon_close from '../../images/icon-close.svg'

const Header = () => {
  const cart = useSelector(state => state.cart.data)
  const products = useSelector(state => state.products.data)
  const header_ref = useRef()
  const [widget_state, setWidgetState] = useState(false)

  const getItemsInCart = () => {
    let sum = 0;
    Object.values(cart).forEach(value => {
      sum += value.count
    })

    return sum
  }

  const handleMenu = () => {
    const icon_menu_elem = header_ref.current.querySelector('img.menu.fixed')
    
    if(window.innerWidth < 900 && header_ref.current.classList.toggle('active')) {
      icon_menu_elem.src = icon_close
    }else {
      icon_menu_elem.src = icon_menu
    }
  }

  const handleItemMenu = e => {
    e.preventDefault()
    console.log(`[-] ${ e.target.innerHTML } | Not Found`)
  }

  // * return
  return (
    <div className='header' ref={ header_ref }>
      <h1>sneakers</h1>
      <div className='header__container'>
        <img className='menu' src={ icon_menu } alt='menu' onClick={ handleMenu }/>
        <img className='logo' src={ logo } alt='logo'/>
      </div>
      <div className='header__nav' onClick={ handleMenu }>
        <img className='menu fixed' src={ icon_menu } alt='menu'/>
        <nav>
          <div onClick={ handleItemMenu }>Collections</div>
          <div onClick={ handleItemMenu }>Men</div>
          <div onClick={ handleItemMenu }>Women</div>
          <div onClick={ handleItemMenu }>About</div>
          <div onClick={ handleItemMenu }>Contact</div>
        </nav>
      </div>
      <div className='header__container'>
        <div className='cart' onClick={ () => setWidgetState(!widget_state) }>
          <img className='cart' src={ icon_cart } alt='cart'></img>
          { getItemsInCart() > 0 && (
            <div className='cart-count'>{ getItemsInCart() }</div>
          ) }
        </div>
        <img className='profile' src={ image_avatar } alt='profile'></img>
      </div>
      <CartWidget widget_state={ widget_state } cart={ cart } products={ products } />
    </div>
  )
}

export default Header
