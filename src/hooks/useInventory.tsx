import { useState, useEffect } from "react";
import { ItemType } from "../../data/shop_items";
import { InventoryType } from "../context/InventoryContext";

const useInventory = () => {
  const [inventory, setInventory] = useState<InventoryType[]>([]);

  useEffect(() => {
    const storedInventory = sessionStorage.getItem("inventory");
    if (storedInventory) {
      setInventory(JSON.parse(storedInventory));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("inventory", JSON.stringify(inventory));
  }, [inventory]);

  const getItemInventory = (shopItem: ItemType): InventoryType => {
    let item = inventory.find((item) => item.shopItem === shopItem);

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
      i.shopItem === existingItem.shopItem ? { ...i, amount: updatedAmount } : i
    );

    setInventory(updatedInventory);
  };

  return { inventory, getItemInventory, setAmountItemInventory };
};

export default useInventory;
