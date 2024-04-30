// eslint-disable-next-line react/prop-types
export default function ReadingListItem({ image, title, author }) {
  return (
    <li className="flex gap-3 items-center">
      <figure className="rounded-md w-10 h-10 grid items-center justify-center">
        <img src={image} alt={title} />
      </figure>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <i>icon</i>
    </li>
  );
}
