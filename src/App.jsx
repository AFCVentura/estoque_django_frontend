import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import EstoquePage from "./pages/EstoquePage";
import EstoqueCreatePage from "./pages/EstoqueCreatePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/estoques" element={<EstoquePage />} />
          <Route path="/estoques/create" element={<EstoqueCreatePage />} />
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
