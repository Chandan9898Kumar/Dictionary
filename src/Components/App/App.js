import React, { lazy, Suspense } from "react";
import "./styles.css";

const NavigationBar = lazy(() => import("./NavigationBar"));
const SearchBar = lazy(() => import("./SearchBar"));

function App() {
  return (
    <Suspense fallback="Loading ...">
      <div className="App">
        <NavigationBar />
        <SearchBar />
      </div>
    </Suspense>
  );
}

export default App;
