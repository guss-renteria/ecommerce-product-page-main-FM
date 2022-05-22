import { useEffect } from 'react'
// [*] redux
import { useSelector, useDispatch } from 'react-redux'
import { setItem } from '../../reducers/cart.reducer'
import { setProduct } from '../../reducers/products.reducer'

import './init.style.scss'

import Header from '../../components/Header/Header.component'

const Init = () => {
  const cart = useSelector(state => state.cart.data)
  const products = useSelector(state => state.products.data)

  const dispatch = useDispatch()

  useEffect(() => {
    let product = {
      name: 'Fall Limited Edition Sneakers',
      data: {
        brand: 'Sneaker Company',
        description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: 250,
        discount: 50,
      }
    }

    dispatch(setProduct(product))
  }, [])

  // * return
  return (
    <section className='init view'>
      <Header />
    </section>
  )
}

export default Init
