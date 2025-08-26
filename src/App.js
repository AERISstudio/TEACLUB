import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./component/DefaultLayout/Header/Header";
import Footer from "./component/DefaultLayout/Footer/Footer";
import MainPage from "./pages/MainPage";
import Activity from "./pages/Activity";
import About from "./pages/About";
import Join from "./pages/Join";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
