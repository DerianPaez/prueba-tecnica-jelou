import BookCard from "./book-card";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api/books-api";

export default function BookList() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const library = data.default.library;

  return (
    <ul className="grid grid-cols-4 gap-10 py-8 px-10 justify-center">
      {library.map((bookData) => {
        const { cover, title, author, ISBN } = bookData.book;
        return (
          <BookCard
            key={ISBN}
            image={cover}
            title={title}
            author={author.name}
          />
        );
      })}
    </ul>
  );
}
