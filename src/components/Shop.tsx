import React from "react";
import ShopItemList from "./ShopItemList";

function Shop() {

  return (
    <div className="text-center">
      <h1>Tienda</h1>
      <div className="row">
        <div className="col">
            <h2>Comprar</h2>
            <ShopItemList action="C" />
        </div>
        <div className="col">
            <h2>Vender</h2>
            <ShopItemList action="V" />
        </div>
      </div>
    </div>
  );
}

export default Shop;
