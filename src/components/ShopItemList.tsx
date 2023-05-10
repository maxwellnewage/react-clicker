import React from "react";
import items from "../../data/shop_items";
import ShopItem from "./ShopItem";

interface ShopItemListProps {
  action: "C" | "V";
}

function ShopItemList({ action }: ShopItemListProps) {
  const itemList = items.map((item, index) => (
    <ShopItem key={index} action={action} item={item} />
  ));

  return <>{itemList}</>;
}

export default ShopItemList;
