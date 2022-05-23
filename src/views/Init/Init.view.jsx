import { useEffect } from 'react'
// [*] redux
import { useSelector, useDispatch } from 'react-redux'
import { setProduct } from '../../reducers/products.reducer'

import './init.style.scss'

import Header from '../../components/Header/Header.component'
import Sneaker from '../../components/Sneaker/Sneaker.component'

// [+] solo en modo de desarrollo
import image_1 from '../../images/image-product-1.jpg'
import image_2 from '../../images/image-product-2.jpg'
import image_3 from '../../images/image-product-3.jpg'
import image_4 from '../../images/image-product-4.jpg'
import image_1_th from '../../images/image-product-1-thumbnail.jpg'
import image_2_th from '../../images/image-product-2-thumbnail.jpg'
import image_3_th from '../../images/image-product-3-thumbnail.jpg'
import image_4_th from '../../images/image-product-4-thumbnail.jpg'

const Init = () => {
  const cart = useSelector(state => state.cart.data)
  const products = useSelector(state => state.products.data)

  const dispatch = useDispatch()

  useEffect(() => {
    let product = {
      code: 'f-snk',
      name: 'Fall Limited Edition Sneakers',
      brand: 'Sneaker Company',
      description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
      price: 250,
      discount: 50,
      images: [
        image_1,
        image_2,
        image_3,
        image_4,
      ],
      thumbnails: [
        image_1_th,
        image_2_th,
        image_3_th,
        image_4_th,
      ]
    }

    dispatch(setProduct(product))
  }, [])

  // * return
  return (
    <section className='init view'>
      <Header />
      <Sneaker />
    </section>
  )
}

export default Init
