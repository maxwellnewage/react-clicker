import React from "react";
import items from "../../data/shop_items";
import ShopItem from "./ShopItem";

const ShopItemList: React.FC = () => {
  const itemList = items.map((item, index) => (
    <ShopItem key={index} item={item} />
  ));

  return <>{itemList}</>;
}

export default ShopItemList;
