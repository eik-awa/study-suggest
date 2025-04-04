import React, { useState } from "react";
import coursesData from "../data/courses.json";
import "../styles/CourseList.css";
import { Course } from "../types/Course";

const CourseList: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course); // モーダルを開くために状態を設定
  };

  const closeModal = () => {
    setSelectedCourse(null); // モーダルを閉じる
  };

  return (
    <div className="course-list-container">
      <div className="course-list">
        {Object.entries(coursesData).map(([category, courses]) => (
          <div key={category} className="course-category">
            <h2>{category}</h2>
            <ul>
              {courses.map((course) => (
                <li
                  key={course.title}
                  className="course-item"
                  onClick={() => handleCourseClick(course)}
                >
                  <img
                    src={course.image}
                    alt={`${course.title} thumbnail`}
                    className="course-image"
                  />
                  <div className="course-info">
                    <h3>{course.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* モーダル */}
      {selectedCourse && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              ×
            </button>
            <h2>{selectedCourse.title}</h2>
            <img
              src={selectedCourse.image}
              alt={`${selectedCourse.title} thumbnail`}
              className="modal-image"
            />
            <p>{selectedCourse.description}</p>
            <a
              href={selectedCourse.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              コースを見る
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseList;
