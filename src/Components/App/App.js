import React, { lazy, Suspense } from "react";
import "./styles.css";
import Store from "./Store";
import { Provider } from "react-redux";
const NavigationBar = lazy(() => import("./NavigationBar"));
const SearchBar = lazy(() => import("./SearchBar"));
const Container = lazy(() => import("./Container"));

function App() {
  return (
    <Suspense fallback="Loading ...">
      <Provider store={Store}>
        <Container className="app">
          <NavigationBar />
          <SearchBar />
        </Container>
      </Provider>
    </Suspense>
  );
}

export default App;
