/* eslint-disable react/prop-types */

export default function ReadingListItem({
  image,
  title,
  author,
  onRemoveReadingList,
}) {
  return (
    <li className="flex gap-3 items-center">
      <figure className="rounded-md w-10 h-10 grid items-center justify-center">
        <img src={image} alt={title} />
      </figure>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <button
        onClick={onRemoveReadingList}
        className="bg-delete rounded-lg w-max px-1 py-1 text-white"
      >
        del
      </button>
    </li>
  );
}
