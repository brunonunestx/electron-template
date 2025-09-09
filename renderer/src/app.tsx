import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./router/routes";
import Home from "./presentation/pages/home/page";

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.BASE} element={<Home />} />
    </Routes>
  );
}

export default App;
