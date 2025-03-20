import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Lab2() {
  const router = useRouter();
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/clothes"
        );

        const result = await response.json();

        setData(result);

        setLoading(false);
      } catch (error) {
        // setError(error.message);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {loading && <p className="absolute right-1/2 bg-slate-200">...loading</p>}
      <p>Clothes</p>
      <div className="grid grid-cols-4 gap-4 m-4">
        {data?.clothes?.map((item) => (
          <div
            key={item.id}
            className="border-2 rounded shadow cursor-pointer p-4 text-xs space-y-2"
            onClick={() => router.push(`/11a/${item.id}`)}
          >
            <img
              src={item?.images[0]}
              alt="123"
              className="w-full h-60 rounded-xl bg-cover"
            />
            <p className="font-bold text-center">{item.name}</p>
            <p>{item.description}</p>
            {/* <p>{item.address.country}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
