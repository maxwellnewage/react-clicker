import React from "react";
import { ItemType } from "../../data/shop_items";

interface ShopItemProps {
  item: ItemType;
}

function ShopItem({ item }: ShopItemProps) {
  const itemSellingCost = item.cost / 2;

  return (
    <div className="row m-2">
      <div className="col">
        <span>
          <item.icon size="50" />
        </span>
        <span className="ms-3">{item.name}</span>
      </div>

      <div className="col">
        <button className="btn btn-success">
          <h5>${item.cost}</h5>
        </button>

        <button className="ms-3 btn btn-danger">
          <h5>${itemSellingCost}</h5>
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
