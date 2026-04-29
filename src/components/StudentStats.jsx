import React from "react";

const StudentStats = ({ students }) => {
  const totalStudents = students.length;
  const passStudents = students.filter((student) => student.score >= 40).length;
  const failStudents = totalStudents - passStudents;
  const totalScore = students.reduce((sum, student) => sum + student.score, 0);
  const averageScore = totalStudents
    ? (totalScore / totalStudents).toFixed(2)
    : "0.00";

  return (
    <section className="stats">
      <h2>Class Summary</h2>

      <div className="stats-grid">
        <div className="stats-card">
          <span>Total Students</span>
          <strong>{totalStudents}</strong>
        </div>

        <div className="stats-card">
          <span>Pass Students</span>
          <strong>{passStudents}</strong>
        </div>

        <div className="stats-card">
          <span>Fail Students</span>
          <strong>{failStudents}</strong>
        </div>

        <div className="stats-card">
          <span>Average Marks</span>
          <strong>{averageScore}</strong>
        </div>
      </div>
    </section>
  );
};

export default StudentStats;
