import React from 'react'
import { useSelector } from 'react-redux'
import HomeItem from './HomeItem'

const Home = () => {

  const items = useSelector((store)=> store.items)
  console.log(items)
  return (
    <div className="products-section">
      <div className="container">
        <h2 className="section-title">Our Premium Collection</h2>
        <p className="section-subtitle">Handpicked pickles made with traditional recipes and premium ingredients</p>
        <div className="items-container">
          {items.map((item)=>(
            <HomeItem key = {item.id} item = {item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home