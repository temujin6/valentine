import { useState } from "react";

export default function Lab3() {
  const [name, setName] = useState("");

  return (
    <div className="flex items-center space-x-4 justify-center mt-20">
      <h1>Name:</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          console.log(e);
        }}
        placeholder="Name..."
        className="border-2 border-black rounded p-2 "
      />
      <h2>Hi 11v, {name ? name : "Suragch"}!</h2>
    </div>
  );
}
