import React from "react";
import Currency from "./pages/Currency";
import Trends from "./pages/Trends";
import Login from "./pages/Login";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
		<NavBar/>
		<AppRouter/>
    </BrowserRouter>
  );
}

export default App;
