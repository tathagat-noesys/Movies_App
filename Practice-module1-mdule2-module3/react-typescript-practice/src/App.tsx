import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClockTimer from "./Components/Clock";
import Simple from "./Components/Simple";

import ConditionalRender from "./Components/Conditional.jsx";
import EventComponent from "./Components/Events.jsx";
import ProjectContent from "./Components/ProjectContentComponent";
import LoginComponent from "./Components/Login.js";
import { grade } from "./util/Data";
import DisplayGrade from "./Components/DisplayGrade.js";

import TableComponent from "./Components/Table";
function App() {
  return (
    <>
      <Simple />
      <ClockTimer />
      <ConditionalRender />
      {/* <ProjectContent>
        <EventComponent />
      </ProjectContent> */}
      <br />

      <LoginComponent />

      {grade.map((el) => (
        <TableComponent heading={["grades", "remarks"]} data={el}>
          <DisplayGrade grade={el} />
        </TableComponent>
      ))}
    </>
  );
}

export default App;
