import {useRef} from 'react'
import './header.style.scss'

import logo from '../../images/logo.svg'
import icon_cart from '../../images/icon-cart.svg'
import image_avatar from '../../images/image-avatar.png'
import icon_menu from '../../images/icon-menu.svg'
import icon_close from '../../images/icon-close.svg'

const Header = () => {
  const header_ref = useRef()

  const handleMenu = () => {
    const icon_menu_elem = header_ref.current.querySelector('img.menu')
    
    if(header_ref.current.classList.toggle('active')) {
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
        <nav>
          <div onClick={ handleItemMenu }>Collections</div>
          <div onClick={ handleItemMenu }>Men</div>
          <div onClick={ handleItemMenu }>Women</div>
          <div onClick={ handleItemMenu }>About</div>
          <div onClick={ handleItemMenu }>Contact</div>
        </nav>
      </div>
      <div className='header__container'>
        <img className='cart' src={ icon_cart } alt='cart'></img>
        <img className='profile' src={ image_avatar } alt='profile'></img>
      </div>
    </div>
  )
}

export default Header
