import React, { useContext } from "react";
import { ItemType } from "../../data/shop_items";
import CookieContext from "../context/CookieContext";

interface ShopItemProps {
  item: ItemType;
}

function ShopItem({ item }: ShopItemProps) {
  const itemSellingCost = item.cost / 2;
  const {cookieAmount, setCookieAmount} = useContext(CookieContext)

  const transaction = (action: 'B'|'S') => () => {
    if (action == 'B') {
      setCookieAmount(cookieAmount - item.cost)
    } else {
      setCookieAmount(cookieAmount + itemSellingCost)
    }
  }

  return (
    <div className="row m-2">
      <div className="col">
        <span>
          <item.icon size="50" />
        </span>
        <span className="ms-3">{item.name}</span>
      </div>

      <div className="col">
        <button 
          className="btn btn-success" 
          disabled={cookieAmount < item.cost}
          onClick={transaction('B')}>
          <h5>${item.cost}</h5>
        </button>

        <button 
          className="ms-3 btn btn-danger"
          onClick={transaction('S')}>
          <h5>${itemSellingCost}</h5>
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
