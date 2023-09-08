import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
