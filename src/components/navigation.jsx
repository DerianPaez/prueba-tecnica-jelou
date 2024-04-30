import ReadingList from "./reading-list";

export default function Navigation() {
  return (
    <nav className="bg-[#EFE5DA] w-64 h-screen px-5 py-6 flex flex-col gap-3 overflow-y-auto sticky">
      <a href="" className="text-3xl uppercase">
        Book App
      </a>
      <ReadingList />
    </nav>
  );
}
