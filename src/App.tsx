import Banner from "./Banner";
import { Header } from "./Header";
import "./i18n"; // Import your i18n configuration file.
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>
        <Banner />
        <h1>{t("welcome")}</h1>
        <p>Aso es un paragraph</p>
      </main>
    </>
  );
}

export default App;
