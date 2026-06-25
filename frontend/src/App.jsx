import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/items/")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Oops!", err));
  }, []);
  return (
    <div>
      <h1>Boden Engebretson</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
