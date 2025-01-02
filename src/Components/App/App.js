import React, { lazy, Suspense } from "react";
import "./styles.css";
import Store from "./Store";
import { Provider } from "react-redux";
const NavigationBar = lazy(() => import("./NavigationBar"));
const SearchBar = lazy(() => import("./SearchBar"));

function App() {
  return (
    <Suspense fallback="Loading ...">
      <Provider store={Store}>
        <div className="App">
          <NavigationBar />
          <SearchBar />
        </div>
      </Provider>
    </Suspense>
  );
}

export default App;
