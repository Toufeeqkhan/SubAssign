import DayBar from "./assets/components/DayBar";
import "./App.css";
import SubCard from "./assets/components/SubjectCard";

export default function App() {
  return (
    <>
      <DayBar />
      <SubCard
        lectureNumber={1}
        time={"08:00-09:00"}
        subjectName={"Calculus Math"}
      />
      <SubCard
        lectureNumber={2}
        time={"09:00-10:00"}
        subjectName={"Islamic Study"}
      />
      <SubCard
        lectureNumber={3}
        time={"10:00-11:00"}
        subjectName={"Functional English"}
      />
      <SubCard
        lectureNumber={4}
        time={"11:00-12:00"}
        subjectName={"Basic Math"}
      />
      <SubCard
        lectureNumber={5}
        time={"12:00-01:00"}
        subjectName={"Applied Physics Practical"}
      />
    </>
  );
}
