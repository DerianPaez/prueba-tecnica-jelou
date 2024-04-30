import BookList from "./components/book-list";
import Layout from "./components/layout";

function App() {
  return (
    <div className="flex">
      <Layout />
      <main>
        <BookList />
      </main>
    </div>
  );
}

export default App;
