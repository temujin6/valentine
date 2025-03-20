import { useState } from "react";

const exampleData = [
  // 0
  {
    id: 1,
    firstname: "Тэмүжин",
    lastname: "Соёл-эрдэнэ",
    job: "developer",
    alive: true,
    items: [
      {
        id: 10,
        name: "keyboard",
      },
      {
        id: 11,
        name: "mosue",
      },
    ],
    height: 185,
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  // 1
  {
    id: 1,
    firstname: "anduul",
    lastname: "Dorj",
    job: "teacher",
    alive: true,
    items: [
      {
        id: 10,
        name: "iphone",
      },
      {
        id: 11,
        name: "laptop",
      },
    ],
    height: 170,
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  // 2
  {
    id: 1,
    firstname: "azzaya",
    lastname: "Dorj",
    job: "teacher",
    alive: true,
    items: [
      {
        id: 10,
        name: "iphone",
      },
      {
        id: 11,
        name: "laptop",
      },
    ],
    height: 170,
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 1,
    firstname: "aydualet",
    lastname: "Dorj",
    job: "teacher",
    alive: true,
    items: [
      {
        id: 10,
        name: "iphone",
      },
      {
        id: 11,
        name: "laptop",
      },
    ],
    height: 170,
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 1,
    firstname: "serjee",
    lastname: "Dorj",
    job: "teacher",
    alive: true,
    items: [
      {
        id: 10,
        name: "iphone",
      },
      {
        id: 11,
        name: "laptop",
      },
    ],
    height: 170,
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 1,
    firstname: "anand",
    lastname: "Dorj",
    job: "teacher",
    alive: true,
    items: [
      {
        id: 10,
        name: "iphone",
      },
      {
        id: 11,
        name: "laptop",
      },
    ],
    height: 170,
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  //10
  {
    id: 1,
    firstname: "narka",
    lastname: "Dorj",
    job: "teacher",
    alive: true,
    items: [
      {
        id: 10,
        name: "iphone",
      },
      {
        id: 11,
        name: "laptop",
      },
    ],
    height: 170,
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
];

export default function Lab4() {
  const [grid, setGrid] = useState(false);
  console.log("lengthj --->", exampleData.length);
  return (
    <div>
      <div className="flex justify-end m-4"></div>
      <div className="grid grid-cols-4  gap-4">
        {exampleData.map((element, index) => (
          <div
            className={`flex flex-col
             
            }items-center justify-center border rounded-xl shadow`}
            key={index}
          >
            <img src={element.image} className="w-40 h-40"></img>
            <p className="text-red-800">Нэр:{element.firstname} </p>
            <p className="text-blue-200">Овог:{element.lastname}</p>
            <p>Бараанууд:</p>
            <div>
              {element.items.map((items) => (
                <p>{items.name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
