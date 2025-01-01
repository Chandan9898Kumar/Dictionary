import React, { lazy, Suspense } from "react";
import "./styles.css";

const NavigationBar = lazy(() => import("./NavigationBar"));

function App() {
  return (
    <Suspense fallback="Loading ...">
      <div className="App">
        <NavigationBar />
      </div>
    </Suspense>
  );
}

export default App;
