import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
