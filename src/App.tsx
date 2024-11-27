import Banner from "./Banner";
import { Header } from "./Header";

import "./i18n"; // Import your i18n configuration file.
import { useTranslation } from "react-i18next";
import Info from "./Info";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>
        <Banner />
        <Info />
        <h1>{t("welcome")}</h1>
        <p>Aso es un paragraph</p>
      </main>
    </>
  );
}

export default App;
