import { useState } from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import Sidebar from "./components/Sidebar";
import Slideshow from "./components/Slideshow";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <Header openSidebar={setSidebar} cartCount={cartCount} />
      <main>
        <Slideshow />
        <ProductDetails setCartCount={setCartCount} cartCount={cartCount} />
      </main>

      <Sidebar
        closeTheSidebar={setSidebar}
        cartCount={cartCount}
        sidebar={sidebar}
        setCartCount={setCartCount}
      />

      {sidebar && (
        <div className="shadow" onClick={() => setSidebar(false)}></div>
      )}
    </div>
  );
}

export default App;
