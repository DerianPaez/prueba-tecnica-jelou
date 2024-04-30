import BookCard from "./book-card";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api/books-api";
import { useDispatch } from "react-redux";
import { addBookToReadingList } from "../features/books/book-slice";

export default function BookList() {
  const dispatch = useDispatch();
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const library = data.default.library;

  return (
    <ul className="grid grid-cols-4 gap-10 py-8 px-10 justify-center">
      {library.map(({ book }) => {
        const { cover, title, author, ISBN } = book;
        return (
          <BookCard
            key={ISBN}
            image={cover}
            title={title}
            author={author.name}
            onAddReadingList={() => {
              dispatch(addBookToReadingList(book));
            }}
          />
        );
      })}
    </ul>
  );
}
