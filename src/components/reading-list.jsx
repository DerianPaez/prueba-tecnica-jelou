import ReadingListItem from "./reading-list-item";

export default function ReadingList() {
  return (
    <>
      <h1 className="text-xl">Reading List</h1>
      <ul>
        <ReadingListItem
          image="./src/assets/react.svg"
          title="Book Title"
          author="Author"
        />
      </ul>
    </>
  );
}
