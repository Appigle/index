import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center h-screen w-screen bg-index-bg bg-no-repeat bg-cover bg-center">
        <h1 className="text-5xl mt-[160px] font-bold text-purple-300 uppercase animate-pulse cursor-progress">
          Home Of Ray
        </h1>
        <div className="card mt-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="text-gray-200 uppercase underline"
          >
            count is {count}
          </button>
        </div>
      </div>
      <a
        href="https://github.com/Appigle"
        title="RayChen's Github"
        className="hover:border-purple-400 border-2 block absolute bottom-12 right-12 z-10 rounded-full"
      >
        <img
          src="AVATAR_OF_DEV.jpg"
          alt="avatar"
          className="h-10 w-10 bg-cover rounded-full"
        />
      </a>
    </>
  );
}

export default App;
