import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/FAQPage.css";

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // 同じ質問をクリックしたら閉じる
  };

  const faqs = [
    {
      question: "このサイトは無料ですか？",
      answer: "はい、完全に無料でご利用いただけます。",
    },
    {
      question: "どのような教材を紹介していますか？",
      answer:
        "資格試験を中心に、様々な学習教材を紹介しています。教材は今後拡張予定です。",
    },
    {
      question: "教材の購入はどこでできますか？",
      answer: "各教材のリンクをクリックすると、購入ページに移動します。",
    },
    {
      question: "このサイトはどのように運営されていますか？",
      answer:
        "個人で運営しており、広告収入やアフィリエイト収入で成り立っています。",
    },
  ];

  return (
    <div className="faq-page">
      <h1>よくある質問</h1>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
      <Link to="/" className="back-link">
        ホームに戻る
      </Link>
    </div>
  );
};

export default FAQPage;
