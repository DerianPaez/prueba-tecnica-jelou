export const getBooks = async () => {
  const response = await fetch(
    "https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev"
  );
  const books = await response.json();
  return books;
};
