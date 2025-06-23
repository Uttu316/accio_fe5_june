import "./App.css";
import FloatBtn from "./components/floatBtn";
import Header from "./components/header";
import PaySection from "./components/paySection";
import Syllabus from "./components/syllabus";

const App = () => {
  const company = {
    name: "Accio",
    established: 2019,
    founder: "Someone",
  };
  const isSale = true;
  return (
    <>
      {isSale && <h2>Sale is Live</h2>}

      <Header />
      <Syllabus />
      <PaySection />
      <footer>
        <b>{company.name}</b>
        <i>{company.established}</i>
        <u>{company.founder}</u>
        {/* <p>{company}</p> */}
      </footer>
      <FloatBtn title={"ChatBox"} icon={"💬"} />
    </>
  );
};

export default App;
