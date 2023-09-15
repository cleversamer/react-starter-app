import { Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ROUTES from "client";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
      <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
    </Routes>
  );
};

export default App;
