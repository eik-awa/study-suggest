import React from "react";
import "../styles/PrivacyPolicyPage.css";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="privacy-policy-page">
      <h1>プライバシーポリシー</h1>
      <section>
        <h2>個人情報の利用目的</h2>
        <p>
          当サイトでは、お問い合わせをいただく際に、名前やメールアドレスなどの個人情報をお伺いすることがあります。{" "}
        </p>
        <p>
          収集した個人情報は、お問い合わせへの対応や必要な情報のご案内を行う目的で使用し、その他の目的には一切利用いたしません。{" "}
        </p>
      </section>
      <section>
        <h2>広告の配信</h2>
        <p>
          本アプリは、Google及びそのパートナー（第三者配信事業者）の提供する広告を設置しています。
        </p>
        <p>
          広告配信にはCookieを使用し、お客様が過去に本アプリやその他のサイトにアクセスした情報に基づいて広告を配信します。
          Googleやその他パートナーは、Cookieを使用することにより適切な広告を表示しています。
        </p>
        <p>
          お客様は、以下のGoogleアカウントの広告設定ページから、パーソナライズ広告を無効にできます。
        </p>
        <p>
          <a
            href="https://adssettings.google.com/u/0/authenticated"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google広告設定ページ
          </a>
        </p>
        <p>
          また aboutads.info
          のページにアクセスし、パーソナライズ広告掲載に使用される第三者配信事業者のCookieを無効にすることもできます。
        </p>
        <p>
          その他、GoogleによるCookieの取り扱い詳細については、以下のGoogleのポリシーと規約のページをご覧ください。
        </p>
        <p>
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Googleのポリシーと規約
          </a>
        </p>
      </section>
      <section>
        <h2>免責事項</h2>
        <p>
          当サイトに掲載されているリンクやバナーを通じて移動した外部サイトで提供される情報やサービスについては、当サイトは一切の責任を負いません。{" "}
        </p>
        <p>
          また、当サイトのコンテンツや情報については、できる限り正確なものを提供するよう努めていますが、その正確性や安全性については保証できません。情報が古くなっている場合もございますので、当サイトに掲載された情報に基づいて生じた損害等については、一切責任を負いかねますことをご了承ください。{" "}
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
