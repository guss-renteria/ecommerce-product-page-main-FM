import { useEffect } from 'react'
// [*] redux
import { useSelector, useDispatch } from 'react-redux'
import { setItem } from '../../reducers/cart.reducer'

import './init.style.scss'

import Header from '../../components/Header/Header.component'

const Init = () => {
  const cart = useSelector(state => state.cart.data)
  const dispatch = useDispatch()

  useEffect(() => {
  }, [])

  // * return
  return (
    <section className='init view'>
      <Header />
      Sneaker Company

      Fall Limited Edition Sneakers

      These low-profile sneakers are your perfect casual wear companion. Featuring a 
      durable rubber outer sole, they’ll withstand everything the weather can offer.

      $125.00
      50%
      $250.00

      0
      Add to cart
    </section>
  )
}

export default Init
