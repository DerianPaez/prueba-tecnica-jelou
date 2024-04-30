/* eslint-disable react/prop-types */
export default function BookCard({ image, title, author }) {
  return (
    <li className="list-none grid gap-3">
      <figure className="h-80">
        <img className="rounded-xl w-full h-full" src={image} alt={title} />
      </figure>
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="text-secondary text-lg font-bold">{title}</h2>
          <p>{author}</p>
        </div>
        <button className="bg-secondary text-white px-3 py-1 rounded-lg  w-max">
          Add
        </button>
      </div>
    </li>
  );
}
