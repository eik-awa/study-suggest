import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <h1>このサイトについて</h1>
      <p>Study Suggestは、資格試験を中心とした学習教材を紹介するサイトです。</p>
      <p>目的に応じた教材を見つけ、効率的に学習を進めるお手伝いをします。</p>
      <Link to="/" className="back-link">
        ホームに戻る
      </Link>
    </div>
  );
};

export default AboutPage;
