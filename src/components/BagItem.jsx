import React from "react";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { RiDeleteBin5Fill } from "react-icons/ri";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const discountPercentage = 45;
  const originalPrice = item.price;
  const currentPrice = Math.round(originalPrice * (1 - discountPercentage / 100));


  return (
    <>
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={item.image} />
        </div>
        <div className="item-right-part">
          <div className="item-name">{item.name}</div>
          <div className="price-container">
            <span className="current-price">Rs {currentPrice}</span>
            <span className="original-price">Rs {originalPrice}</span>
            <span className="discount-percentage">
              ({discountPercentage}% OFF)
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">14 days</span> return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days"> 10 Oct 2023</span>
          </div>
        </div>

        <div className="remove-from-cart" onClick={handleRemoveItem}>
          <RiDeleteBin5Fill />
        </div>
      </div>
    </>
  );
};

export default BagItem;

