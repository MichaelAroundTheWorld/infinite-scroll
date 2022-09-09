import React, { useEffect, useState } from "react";
import { Item } from "./data/data.model";

function App() {
  const [items, setItems] = useState<Item[]>([{ bg: "#CB6B56" }]);
  useEffect(() => {
    const interval = setInterval(() => {
      setItems([
        ...items,
        { bg: "#" + Math.floor(Math.random() * 16777215).toString(16) },
      ]);
    }, 100);
    console.log(interval);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="App">
      {items.map((item, index) => (
        <div key={index} className="box" style={{ background: item.bg }}>
          <p>{index}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
