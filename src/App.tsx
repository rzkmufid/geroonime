import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { fetchAnimeList } from "./api/jikanAPI";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
