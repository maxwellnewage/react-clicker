import { useState, useEffect, useContext } from "react";
import { ItemType } from "../../data/shop_items";
import InventoryContext, { InventoryType } from "../context/InventoryContext";

const useInventory = () => {
  const {inventory, setInventory} = useContext(InventoryContext);

  const getItemInventory = (shopItem: ItemType): InventoryType => {
    let item = inventory.find((item) => item.shopItem.name === shopItem.name);

    if (!item) {
      item = {
        shopItem: shopItem,
        amount: 0
      };

      setInventory([...inventory, item]);
    }

    return item;
  };

  const setAmountItemInventory = (shopItem: ItemType, action: "B" | "S") => {
    const existingItem = getItemInventory(shopItem);
    
    const updatedAmount =
      action === "B" ? existingItem.amount + 1 : existingItem.amount - 1;

    const updatedInventory = inventory.map((i) =>
      i.shopItem.name === existingItem.shopItem.name ? { ...i, amount: updatedAmount } : i
    );

    console.log(updatedInventory)

    setInventory(updatedInventory);
  };

  const getTotalGiveInventory = () => {
    return inventory.reduce((accumulator, inv) => {
      const amount = inv.amount
      const shopItemGive = inv.shopItem.give

      return accumulator + (shopItemGive * amount)
    }, 0)
  }

  return { inventory, getItemInventory, setAmountItemInventory, getTotalGiveInventory };
};

export default useInventory;
