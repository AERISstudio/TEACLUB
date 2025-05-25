import "./App.css"

import Header from "./component/DefaultLayout/Header/Header";
import Footer from "./component/DefaultLayout/Footer/Footer";
import MainPage from "./component/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
