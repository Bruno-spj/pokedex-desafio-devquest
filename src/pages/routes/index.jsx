import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home/index";
import { Details } from "../details";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
