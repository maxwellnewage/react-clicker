import React from "react";
import ShopItemList from "./ShopItemList";

function Shop() {
  return (
    <div className="text-center">
      <h1>Tienda</h1>
      <div className="row">
        <ShopItemList />
      </div>
    </div>
  );
}

export default Shop;
