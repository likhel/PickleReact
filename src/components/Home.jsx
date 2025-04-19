import React from 'react'
import { useSelector } from 'react-redux'
import HomeItem from './HomeItem'

const Home = () => {

  const items = useSelector((store)=> store.items)
  console.log(items)
  return (

    
        <div className = "items-container">
            {items.map((item)=>(
                <HomeItem key = {item.id} item = {item} />
            ))}

        </div>
    
  )
}

export default Home