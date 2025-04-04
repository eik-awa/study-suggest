import React from "react";
import { Link } from "react-router-dom"; // React Router を使用
import CourseList from "../components/CourseList";
import "../styles/HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="content">
        {/* メインコンテンツ */}
        <main className="main-content">
          <section id="courses">
            <h2>おすすめの学習教材</h2>
            <CourseList />
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
