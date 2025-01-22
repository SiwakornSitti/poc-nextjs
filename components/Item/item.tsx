import { useCart } from "@/store/cart";
import type { Item as CartItem } from "@/store/cart";

interface ItemProps {
  item: CartItem;
}

export const Item = ({ item }: ItemProps) => {
  const { removeItem } = useCart();

  const handleRemoveItemClicked = (item: CartItem) => {
    removeItem(item);
  };

  return (
    <li key={item.name}>
      {item.name} - ${item.price}{" | "}
      <button onClick={() => handleRemoveItemClicked(item)}>Remove</button>
    </li>
  );
};
