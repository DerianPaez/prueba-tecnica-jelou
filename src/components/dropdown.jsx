import { useState } from "react";
import DropdownItem from "./dropdown-item";
import { useDispatch, useSelector } from "react-redux";
import { filterByGenre } from "../features/books/book-slice";

export default function Dropdown() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.books.genres);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-3 py-1 bg-gray-600 border-2 border-brown text-brown rounded-xl hover:bg-brown hover:text-white transition delay-75 focus:outline-none focus:bg-brown focus:text-white"
      >
        Género
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <DropdownItem
            key="all"
            title="Todos"
            onFilterByGenre={() => dispatch(filterByGenre(""))}
            toggleDropdown={toggleDropdown}
          />
          {genres.map((genre) => (
            <DropdownItem
              key={genre}
              title={genre}
              onFilterByGenre={() => dispatch(filterByGenre(genre))}
              toggleDropdown={toggleDropdown}
            />
          ))}
        </div>
      )}
    </div>
  );
}
