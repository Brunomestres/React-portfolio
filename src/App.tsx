import React from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Intro } from "./components/Intro";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
