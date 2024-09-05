// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme"; // Import your theme
import SinglePage from "./pages/SinglePage";
import ReportIssues from "./components/ReportIssues";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SinglePage />} />
          <Route path="/report" element={<ReportIssues />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
