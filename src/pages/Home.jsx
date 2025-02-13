import React from 'react'
import ProductCard from '../components/ProductCard'
import useTitle from '../hooks/useTitle'
import { headphone1, headphone2, headphone3, headphone4, headphone5, headphone6 } from '../assets/images'

const Home = () => {
    useTitle("Home")

    const products = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": headphone1},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": headphone2},
        {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": headphone3},
        {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": headphone4},
        {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": headphone5},
        {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": headphone6},
      ]





  return (
    <section className='mt-20'>
        <div className="flex flex-wrap justify-center gap-5">
        {
            products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
        }
        </div>
    </section>
  )
}

export default Home