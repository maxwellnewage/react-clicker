import React from "react";
import { BsHandIndexThumb } from "react-icons/bs";
import { ItemType } from "../../data/shop_items";

interface ShopItemProps {
  action: ("C" | "V"),
  item: ItemType
}

function ShopItem({ action, item }: ShopItemProps) {
  const btnColor = action === "C" ? "btn btn-success" : "btn btn-danger"
  const itemCost = action === "C" ? item.cost : item.cost / 2 

  return (
    <div className="row m-2">
      <button className={btnColor}>
        <div className="row">
          <h4>
            <item.icon />
          </h4>
          <h4>{item.name}</h4>
          <h4>{itemCost}</h4>
        </div>
      </button>
    </div>
  );
}

export default ShopItem;
