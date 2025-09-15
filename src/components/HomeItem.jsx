import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const HomeItem = ({item}) => {
    
    const dispatch =  useDispatch();
    const bagItems = useSelector(store => store.bag);
    const elementFound = bagItems.indexOf(item.id)>=0; 

    const handleAddToBag = () => {
      console.log("adding to bag")
      dispatch(bagActions.addToBag(item.id));

    }
    const handleRemove = () => {
      dispatch(bagActions.removeFromBag(item.id));

    }
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="item-name"><p style={{fontSize: "18px", color: "#1E293B"}}>{item.name} <span className="item-stock">({item.stock})</span></p>
        
        </div>
        <div className="price">
          <span className="current-price">Rs {item.price}</span>
        </div>
       {elementFound ? (
      <button 
        type="button" 
        className="btn-remove" 
        onClick={handleRemove}
      >
        <MdDeleteForever /> Remove
      </button>
    ) : (
      <button 
        type="button" 
        className="btn-add" 
        onClick={handleAddToBag}
      >
        <IoIosAddCircle /> Add to Bag
      </button>
    )}
        
      </div>
      
    </>
  );
};

export default HomeItem;