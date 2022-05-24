import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../reducers/cart.reducer'

import './cart_widget.style.scss'
import './cart_widget.style_md.scss'

import icon_trash from '../../images/icon-delete.svg'

const CartWidget = ({ widget_state, cart, products }) => {
  const widget_ref = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    if(widget_state)
      widget_ref.current.classList.add('active')
    else
      widget_ref.current.classList.remove('active')
  }, [widget_state])

  // * return
  return (
    <div className='cart-widget' ref={ widget_ref }>
      <div className='cart-container'>
        <h2>Cart</h2>
        { cart && Object.values(cart).find(val => val.count > 0) ? Object.keys(cart).map(key => {
          if(cart[key].count > 0) {
            const prod = products.find(p => p.code == key)
            const one_price = parseFloat(prod.price-(prod.price/100*prod.discount)).toFixed(2)

            return (
              <div  key={ key }>
                <div className='object-in-cart'>
                  <img src={ prod.images[0] } alt='image'/>
                  <div className='object-info'>
                    <h3>{ prod.name }</h3>
                    <p className='price'>{ `$${ one_price } x ${ cart[key].count }`}<b>{ `$${ parseFloat(one_price * cart[key].count).toFixed(2) }` }</b></p>
                  </div>
                  <img src={ icon_trash } alt='trash' onClick={ () => dispatch(addItem({ code: key, count: -cart[key].count })) }/>
                </div>
                <button className='checkout'>Checkout</button>
              </div>
            )
          }
        }) : (
          <p className='empty'>Your cart is empty.</p>
        )}
      </div>
    </div>
  )
}

export default CartWidget
