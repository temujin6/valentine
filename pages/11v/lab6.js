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
        name: "mouse",
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
];

export default function Lab4() {
  const [grid, setGrid] = useState(false);
  const [search, setSearch] = useState("");

  // console.log("lengthj --->", exampleData.length);

  const filtered = exampleData.filter((item) =>
    item.firstname.toLowerCase().includes(search.toLowerCase())
  );

  const exampleFilter = exampleData.filter((test) => {
    console.log(test);
  });

  return (
    <div>
      <div className="flex justify-between m-4 fixed h-20 top-0  w-full">
        <input
          placeholder="Нэрээр хайх..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(e.target.value);
          }}
          className="border-2 border-blue-600 cursor-pointer rounded-xl mr-4 pl-2 h-12 pr-4"
        />
        <button
          className="border rounded-xl bg-blue-400 p-4 h-12 flex items-center pl-4"
          onClick={() => setGrid((o) => !o)}
        >
          {grid ? "Мөр болгох" : "Багана болгох"}
        </button>
      </div>
      <div
        className={`${
          grid === true ? "grid" : "flex flex-col"
        } grid-cols-1 xl:grid-cols-4 mt-32 lg:grid-cols-3 md:grid-cols-2  gap-4`}
      >
        {filtered.length > 0 ? (
          filtered.map((element, index) => (
            <div
              className={`flex ${
                grid ? "flex-col" : "space-x-10"
              } items-center justify-center border rounded-xl shadow`}
              key={index}
            >
              <img
                src={element.image}
                className={`${grid ? "w-40 h-40" : "w-20 w-20 rounded-full"} `}
              ></img>
              <p className="text-red-800">Нэр:{element.firstname} </p>
              <p className="text-blue-200">Овог:{element.lastname}</p>
              <p>Бараанууд:</p>
              <div>
                {element.items.map((items) => (
                  <p>{items.name}</p>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-full text-2xl">
            <span className="font-bold">{search}</span> нэртэй хэрэглэгч
            олдсонгүй
          </p>
        )}
      </div>
    </div>
  );
}
