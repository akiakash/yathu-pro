import React from "react";
import Mens from "./Mens";
import Womens from "./Womens";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/mensclothing" component={Mens} />
        <Route path="/womensclothing" component={Womens} />
      </Routes>
    </BrowserRouter>
  );
}
