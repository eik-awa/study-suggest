import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Study Suggest</h1>
      <p>- 資格試験を中心に学習教材を紹介するサイト -</p>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/about">このサイトについて</Link>
          </li>
          <li>
            <Link to="/contact">よくある質問</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
