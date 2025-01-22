"use client";

import { useCart } from "@/store/cart";
import { useRouter } from "next/navigation";
import { faker } from "@faker-js/faker";
import { Item } from "@/components/Item/item";
import { useShallow } from "zustand/react/shallow";

export default function Page3() {
  const router = useRouter();
  const { items, addItem } = useCart(
    useShallow((state) => ({
      items: state.items,
      addItem: state.addItem,
    }))
  );

  const handleAddItemClicked = () => {
    addItem({
      id: faker.git.commitSha(),
      name: faker.commerce.productName(),
      price: faker.number.float({ min: 10, max: 10000, fractionDigits: 2 }),
    });
  };

  const handleBackClicked = () => router.back();

  return (
    <main className="min-h-screen p-24 bg-emerald-500">
      <h1 className="text-2xl font-bold">Page 3</h1>
      <br />
      <div className="flex gap-4">
        <button className="font-semibold" onClick={() => router.push("/page1")}>
          Page1
        </button>
        <button className="font-semibold" onClick={() => router.push("/page2")}>
          Page2
        </button>
        <button className="font-semibold" onClick={() => router.push("/page3")}>
          Page3
        </button>
      </div>
      <br />
      <section className="flex gap-4">
        <button onClick={handleAddItemClicked}>Add</button>
        <button onClick={handleBackClicked}>Back</button>
      </section>
      <br />
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
}
