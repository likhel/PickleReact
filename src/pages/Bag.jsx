import React from 'react'
import BagItem from '../components/BagItem'
import BagSummary from '../components/BagSummary'
import { useSelector } from 'react-redux'

const Bag = () => {

    const bagItems = useSelector(store => store.bag)
    const items = useSelector(store => store.items)
    const finalItems = items.filter(item =>{
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >=0;
    })
  return (
    <>
        <main>
            <div className = 'bag-page'>
                <div className = 'bag-items-container'></div>
                {finalItems.map((item) => (<BagItem key = {item.id} item = {item} />))}

                <BagSummary />
            </div>
        </main>
    
    </>
  )
}

export default Bag


