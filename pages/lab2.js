import { useEffect, useState } from "react";

export default function lab2() {
  const [color, setColor] = useState("");
  const [data, setData] = useState();

  //2
  useEffect(() => {
    const fetchData = async () => {
      return await fetch("https://mongol-api-rest.vercel.app/clothes")
        .then((res) => {
          res.json();
        })
        .then((json) => console.log(json));
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   setColor("red");
  //   console.log("iishee orno");
  // }, [color]);

  console.log(color);

  return (
    <div className={`bg-${color}-800 h-screen`}>
      {/* {data?.map((item) => item?.id)} */}

      <button
        className="bg-red-800 border p-4 m-4"
        onClick={() => setColor("red")}
      >
        red
      </button>
      <button
        className="bg-blue-800 border p-4 m-4"
        onClick={() => setColor("blue")}
      >
        blue
      </button>
      <button
        className="bg-green-800 border p-4 m-4"
        onClick={() => setColor("green")}
      >
        green
      </button>

      <button
        className="bg-pink-800 border p-4 m-4 text-black"
        onClick={() => setColor("")}
      >
        clear
      </button>

      {color == "red"
        ? "123"
        : color == "blue"
        ? "456"
        : color == "green"
        ? "789"
        : color == ""
        ? "1000"
        : "000"}
    </div>
  );
}
