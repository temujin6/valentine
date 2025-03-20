import { useState } from "react";

export default function Home() {
  const [buttonText, setButtonText] = useState("Click Me");
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setButtonText("Clicked!");
    setCount(count + 1);
    setShowModal(true);
    setTimeout(() => setButtonText("Click Me"), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <header className="w-full py-6 bg-blue-600 text-white text-center text-3xl font-bold">
        Nest high school
      </header>
      <div className="max-w-6xl text-center mt-10">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">
          Welcome to Nest school
        </h1>
        <p className="text-2xl text-gray-600 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={handleClick}
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {buttonText}
          </button>
          <span className="text-xl text-gray-800">Clicked {count} times</span>
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800">Modal Title</h2>
              <p className="text-gray-600 mt-2">Clicked: {count} times!</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>✔️ High Performance</li>
              <li>✔️ Responsive Design</li>
              <li>✔️ Easy to Use</li>
              <li>✔️ Scalable Solutions</li>
              <li>✔️ 24/7 Support</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Features
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>🚀 Fast and Lightweight</li>
              <li>📱 Mobile-First Approach</li>
              <li>🎨 Customizable UI</li>
              <li>🔒 Secure and Reliable</li>
              <li>🌎 Global Reach</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Customer Reviews
            </h2>
            <p className="text-gray-600 italic">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-gray-600 italic mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <footer className="w-full py-6 bg-gray-800 text-white text-center mt-12">
        &copy; 2025 Our Company. Nest education High school
      </footer>
    </div>
  );
}
