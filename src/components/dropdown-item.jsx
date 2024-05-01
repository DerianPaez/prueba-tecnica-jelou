/* eslint-disable react/prop-types */
export default function DropdownItem({
  title,
  onFilterByGenre,
  toggleDropdown,
}) {
  return (
    <button
      onClick={() => {
        onFilterByGenre();
        toggleDropdown();
      }}
      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full"
    >
      {title}
    </button>
  );
}
