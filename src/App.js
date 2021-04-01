import logo from "./logo.svg";
import "./App.css";

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t('Title.text1')}</p>
        <p>{t('Subtitle.text2')}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div
        style={{ width: "100%", padding: "2rem 0", backgroundColor: "black" }}
      >
        <button onClick={() => handleClick("en")}>English</button>
        <button onClick={() => handleClick("ko")}>Korean</button>
        <button onClick={() => handleClick("fr")}>French</button>
      </div>
    </div>
  );
}

export default App;
