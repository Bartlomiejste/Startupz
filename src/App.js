import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary/ErrorBoundary";
import MainPage from "./page/Main/Main";

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
