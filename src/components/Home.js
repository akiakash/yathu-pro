import React from "react";
import Card from "./Card";
import Categories from "./Categories";

export default function Home() {
  return (
    <>
      <h1>Modern Walk</h1>
      <h2 style={{ textAlign: "left", marginLeft: 110 }}>Flash Sale</h2>
      <div>
        <Card />
      </div>
      <h2 style={{ textAlign: "left", marginLeft: 110, marginTop: 40 }}>
        Categories
      </h2>
      <div>
        <Categories />
      </div>
    </>
  );
}
