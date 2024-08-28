import { Footer } from "../components/Footer/index.js";
import { Header } from "../components/Header/index.js";
import { Main } from "../components/Main/index.js";
import "./App.scss";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
