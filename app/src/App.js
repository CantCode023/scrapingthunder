import React, { useState, useRef } from 'react'

export default function App() {
  const [url, setUrl] = useState('https://example.com')
  const input_ref = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setUrl(input_ref.current.value);
  };

  return (
    <div className="min-h-screen bg-[#282c34] flex items-center flex-col">
      <header className="mt-[5rem] text-white text-5xl">Scraping Thunder</header>
      <form onSubmit={handleFormSubmit}>
        <input type="text" ref={input_ref} className="mt-10 rounded-full w-[25rem] h-[2.5rem] px-5" placeholder="URL here.."></input>
        <button type="submit" className="hidden">Submit</button>
      </form>
      <iframe src={url} className="w-full h-screen px-16 my-10"></iframe>
    </div>
  );
}