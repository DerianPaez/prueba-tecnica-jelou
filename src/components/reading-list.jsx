import { useDispatch, useSelector } from "react-redux";
import ReadingListItem from "./reading-list-item";
import { removeBookFromReadingList } from "../features/books/book-slice";

export default function ReadingList() {
  const dispatch = useDispatch();
  const readingList = useSelector((state) => state.books.readingList);
  return (
    <>
      <h1 className="text-xl">Reading List</h1>
      <ul>
        {readingList.map(({ ISBN, cover, title, author }) => (
          <ReadingListItem
            key={ISBN}
            image={cover}
            title={title}
            author={author.name}
            onRemoveReadingList={() => {
              dispatch(removeBookFromReadingList({ ISBN }));
            }}
          />
        ))}
      </ul>
    </>
  );
}
