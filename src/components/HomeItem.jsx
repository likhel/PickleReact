import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import ProductDetail from "./ProductDetail";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  const [showProductDetail, setShowProductDetail] = useState(false);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const handleShowProductDetail = () => {
    setShowProductDetail(true);
  };

  const handleCloseProductDetail = () => {
    setShowProductDetail(false);
  };

  return (
    <>
      <div className="item-container" onClick={handleShowProductDetail}>
        <img className="item-image" src={item.image} alt="item image" />
        <div className="item-name">
          {item.name} <span className="item-stock">({item.stock})</span>
        </div>
        <div className="price">
          <span className="current-price">Rs {item.price}</span>
        </div>
        {elementFound ? (
          <button
            type="button"
            className="btn-remove"
            onClick={(e) => {
              e.stopPropagation(); 
              handleRemove();
            }}
          >
            <MdDeleteForever /> Remove
          </button>
        ) : (
          <button
            type="button"
            className="btn-add"
            onClick={(e) => {
              e.stopPropagation(); 
              handleAddToBag();
            }}
          >
            <IoIosAddCircle /> Add to Bag
          </button>
        )}
      </div>
      {showProductDetail && (
        <ProductDetail item={item} onClose={handleCloseProductDetail} />
      )}
    </>
  );
};

export default HomeItem;