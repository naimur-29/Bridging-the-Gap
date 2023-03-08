import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing the main layout
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

const App = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              isLoggedIn={false}
              isDarkModeEnabled={isDarkModeEnabled}
              setIsDarkModeEnabled={setIsDarkModeEnabled}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <Layout
              isLoggedIn={true}
              isDarkModeEnabled={isDarkModeEnabled}
              setIsDarkModeEnabled={setIsDarkModeEnabled}
            />
          }
        >
          {/* <Route path="" element={<h1>Hello world!</h1>} /> */}
        </Route>

        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
