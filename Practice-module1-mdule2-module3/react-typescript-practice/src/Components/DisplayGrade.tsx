import React from "react";

const DisplayGrade = ({ grade }: displayGradeProps) => {
  if (grade > 90) {
    return (
      <div>
        <p>Well Done</p>
      </div>
    );
  }
  if (grade >= 70 && grade <= 90) {
    return <div>Average</div>;
  } else if (grade > 0 && grade < 70) {
    return <div>Better Luck Next Time</div>;
  } else {
    return <div>Not possible</div>;
  }
};

interface displayGradeProps {
  grade: number;
}

export default DisplayGrade;
