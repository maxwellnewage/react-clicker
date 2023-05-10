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
        <h4>
          <item.icon />
        </h4>
        <h4>{item.name}</h4>
      </div>

      <div className="col">
        <div className="row">
            <div className="col">
                <button className="btn btn-success">
                    <h4>${item.cost}</h4>
                </button>
            </div>

            <div className="col">
                <button className="btn btn-danger">
                    <h4>${itemSellingCost}</h4>
                </button>
            </div>
        </div>
      </div>

    </div>
  );
}

export default ShopItem;
