import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoIosAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import styles from "./ProductDetail.module.css";

import { MdDeleteForever } from "react-icons/md";


const ProductDetail = ({ item, onClose }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  const [quantity, setQuantity] = useState(1);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={`${styles["product-detail-overlay"]}`}>
      <div className={`${styles["product-detail-container"]}`}>
        <button className={`${styles["close-btn"]}`}onClick={onClose}>
          <RxCross1 />
        </button>
        <div className={`${styles["product-detail-content"]}`}>
          <img
            className={`${styles["product-detail-image"]}`}
            src={item.image}
            alt={item.name}
          />
          <div className={`${styles["product-detail-info"]}`}>
            <h1>{item.name.toUpperCase()} <span className={`${styles["item-stock"]}`}>({item.stock}) </span></h1>
            
            <p className={`${styles["item-description"]}`}>{item.description}</p>
            <div className={`${styles["price-container"]}`}>
              <span className={`${styles["current-price"]}`}>Rs {item.price}</span>
              {item.original_price && (
                <span className={`${styles["original-price"]}`}>Rs {item.original_price}</span>
              )}
              {item.discount_percentage && (
                <span className={`${styles["discount"]}`}>{item.discount_percentage}% OFF</span>
              )}
            </div>

            <div className={`${styles["quantity-control"]}`}>
              <button onClick={handleDecrement} className={`${styles["btn-decrement"]}`}>
                <IoMdRemoveCircle />
              </button>
              <span>{quantity}</span>
              <button onClick={handleIncrement} className={`${styles["btn-increment"]}`}>
                <IoIosAddCircle />
              </button>
            </div>

            {elementFound ? (
              <button
                type="button"
                className={`${styles["btn-remove"]}`}
                
                onClick={handleRemove}
                
              >
                <MdDeleteForever /> Remove
              </button>
            ) : (
              <button type="button" className={`${styles["btn-add"]}`} onClick={handleAddToBag}>
                <IoIosAddCircle /> Add to Bag
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
