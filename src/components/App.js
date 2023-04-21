import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <div className={`App ${isDarkMode ? "dark" : "light"}`}>
        <header>
          <h2>Shopster</h2>
          <button onClick={handleToggleMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        <ShoppingList items={itemData} />
      </div>
      <div className={`App ${isDarkMode ? "dark" : "light"}`}>
        {/* Another div that changes between dark and light mode */}
      </div>
    </div>
  );
}

export default App;
