"use client";
import { memo, useCallback, useEffect, useMemo, useState } from "react";

// prop state context
const Button = memo(
  ({ onClick, text }: { onClick: () => void; text: string }) => {
    return <button onClick={onClick}>{text}</button>;
  },
);

Button.displayName = "Button";

const Footer = ({ time }: { time: number }) => {
  const [currentTime, setCurrentTime] = useState<number>(time);

  useEffect(() => {
    setCurrentTime(time);
  }, [time]);

  return <div>{currentTime}</div>;
};

export default function Page1() {
  const [count, setCount] = useState<number>(0);
  const [obj, setObj] = useState<any>({
    name: "hello",
    price: 100,
    obj: {
      items: [
        {
          id: 1,
          name: "item1",
        },
      ],
    },
  });

  const [items, setItems] = useState<any[]>([
    {
      id: 1,
      name: "item1",
      price: 10000,
    },
    {
      id: 2,
      name: "item2",
      price: 30000,
    },
    {
      id: 3,
      name: "item3",
      price: 30000,
    },
    {
      id: 1000,
      name: "item1000",
      price: 30000,
    },
  ]);

  const [value, setValue] = useState("");

  const totalPrice = useMemo(
    () =>
      items.reduce((acc, item) => {
        return acc + item.price;
      }, 0),
    [items],
  );

  const handleOnClick = useCallback(() => {
    alert(value);
  }, [value]);

  const handleOnChange = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log("mounted!!");

    return () => {
      console.log("unmounted!!");
    };
  }, [obj]); // true

  return (
    <main className="min-h-screen p-24 bg-indigo-500">
      <h1>Hello World!!! {totalPrice}</h1>
      <div className="">list 1</div>
      <input
        type="text"
        className="text-black"
        onChange={handleOnChange}
        value={value}
      />
      <br />
      <button
        onClick={() => {
          const newObj = {
            ...obj,
            name: "word",
          };

          setObj(newObj);
        }}
      >
        Object
      </button>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <br />
      <br />
      <Button onClick={handleOnClick} text={"click!"}></Button>
      <Footer time={new Date().getTime()} />
    </main>
  );
}
