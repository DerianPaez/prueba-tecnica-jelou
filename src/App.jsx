import BookList from "./components/book-list";
import Dropdown from "./components/dropdown";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="flex">
      <Navigation />
      <main className="grid auto-rows-max gap-6 py-6 px-10">
        <Dropdown />
        <BookList />
      </main>
    </div>
  );
}

export default App;
