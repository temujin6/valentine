import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 10) return; // Хэрэв 10 хүрсэн бол зогсоно.

    const timer = setTimeout(() => {
      setCount(count + 1); // 1 секунд тутамд 1-ээр нэмэгдэнэ.
    }, 1000);

    return () => clearTimeout(timer); // Component unmount болоход цэвэрлэнэ.
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Тоолуур: {count}</h1>
    </div>
  );
}
