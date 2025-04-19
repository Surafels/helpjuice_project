'use client';
import SearchBar from "./components/searchbar";
import Card from "./components/card";
import { useState, useEffect } from 'react';

export default function Home() {
  const [title, setTitle] = useState("");
  const [titles, setTitles] = useState([]);
  const [list, setList] = useState([]);
  const [filLen, setFilLen] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const data = [{ "type": "heading 1", "shortcut": "shortcut: type # + space" }, { "type": "expandable heading 1", "shortcut": "shortcut: type >># + space" }]

  const filterData = (e) => {
    const value = e.target.value;
    setTitle(value);

    if (value === '/') {
      setList(data);
      setFilLen(0);
      setShowCard(true);
    } else if (value.startsWith('/')) {
      const searchTerm = value.substring(1).toLowerCase();
      const result = data.filter(item =>
        item.command.toLowerCase().includes(searchTerm)
      );
      setList(result);
      setFilLen(searchTerm.length);
      setShowCard(result.length > 0);
    } else {
      setShowCard(false);
    }
  };
  const saveTitle = (e) => {
    if (e.key === "Enter") {
      if (title.startsWith('/1 ')) {
        const headingText = title.substring(3).trim();
        if (headingText) {
          const newTitle = `/1 ${headingText}`;
          let storedTitles = JSON.parse(localStorage.getItem("headings")) || [];
          const updatedTitles = [...storedTitles, newTitle];

          localStorage.setItem("headings", JSON.stringify(updatedTitles));
          setTitles(updatedTitles);
          setTitle("");
          setShowCard(false);
        }
      }
    } else if (e.key === "Escape") {
      setShowCard(false);
    }
  };
  const remove = (index) => {
    let storedTitles = JSON.parse(localStorage.getItem("headings")) || [];
    const updatedTitles = storedTitles.filter((_, i) => i !== index);
    localStorage.setItem("headings", JSON.stringify(updatedTitles));
    setTitles(updatedTitles);
  };

  useEffect(() => {
    const storedTitles = JSON.parse(localStorage.getItem("headings")) || [];
    setTitles(storedTitles);
  }, []);

  return (
    <div className="h-[730px]">
      <SearchBar />
      <div className="w-1/2 m-auto pt-5 pb-5">
        <h1 className="text-2xl text-[#0D121C] font-black m-auto border-b border-[#E5E7EB] pb-2">
          Front-End developer test project
        </h1>
        <p className="text=[#4D5562] mt-4">
          Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by typing / then 1,
          typing text, and hitting enter.
        </p>
      </div>
      <div className="w-1/2 m-auto mt-4">
        {titles.map((val, index) => {
          if (val.startsWith("/1 ")) {
            const headingText = val.substring(3);
            return (
              <div key={index} className="flex items-center group mb-2">
                <h1 className="text-2xl font-bold flex-grow">{headingText}</h1>
                <button
                  onClick={() => remove(index)}
                  className="opacity-0 group-hover:opacity-100 text-red-500 ml-2"
                >
                  Remove
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="relative w-1/2 m-auto">
        <input
          className="flex p-5 m-auto w-full"
          placeholder="Heading"
          value={title}
          onChange={filterData}
          onKeyDown={saveTitle}
          onFocus={() => title.startsWith('/') && setShowCard(true)}
        />
        {showCard && (
          <Card data={list} len={filLen} />
        )}
      </div>
    </div>
  );
}