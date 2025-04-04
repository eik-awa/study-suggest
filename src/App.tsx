import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"; // プライバシーポリシーページをインポート
import Header from "./components/Header"; // ヘッダーをインポート

const App: React.FC = () => {
  return (
    <Router>
      {/* 共通ヘッダー */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />{" "}
        {/* プライバシーポリシーページ */}
      </Routes>

      {/* フッター */}
      <footer className="footer">
        <p>&copy; 2025 Study Suggest. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">プライバシーポリシー</a>
        </p>
      </footer>
    </Router>
  );
};

export default App;
