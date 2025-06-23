import SyllabusItem from "./syllabusItem";

const Syllabus = () => {
  return (
    <>
      <h2>Course Syllabus</h2>
      <ul className="list">
        <SyllabusItem label={"Setup"} />
        <SyllabusItem label={"Installation"} />
        <SyllabusItem label={"Understading the React App"} />
        <SyllabusItem label={"Components"} />
        <SyllabusItem label={"Props"} />
        <SyllabusItem label={"State"} />
      </ul>
    </>
  );
};

export default Syllabus;
