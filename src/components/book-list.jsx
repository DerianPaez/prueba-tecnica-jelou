import BookCard from "./book-card";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api/books-api";
import { useDispatch, useSelector } from "react-redux";
import { addBookToReadingList } from "../features/books/book-slice";
import { setGenres } from "../features/books/book-slice";
import { useEffect } from "react";

export default function BookList() {
  const genreToFilter = useSelector((state) => state.books.genreToFilter);
  const dispatch = useDispatch();
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  useEffect(() => {
    if (data) {
      const genres = data.default.library.map(({ book }) => book.genre);
      const uniqueGenres = [...new Set(genres)];
      dispatch(setGenres(uniqueGenres));
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  const library = data.default.library.filter(({ book }) => {
    if (!genreToFilter) return true;
    return book.genre.toLowerCase().includes(genreToFilter.toLowerCase());
  });

  return (
    <ul className="grid grid-cols-4 gap-10 justify-center">
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
