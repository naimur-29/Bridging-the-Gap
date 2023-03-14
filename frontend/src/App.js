import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing the main layout
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import University from "./pages/University/University";
import CoursePage from "./pages/CoursePage/CoursePage";
import StatsPage from "./pages/StatsPage/StatsPage";
import Faculty from "./pages/Faculty/Faculty";
import Student from "./pages/Student/Student";
import Feedback from "./pages/Feedback/Feedback";

const App = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);
  const [navbarTitle, setNavbarTitle] = useState("Dashboard");
  const [currentCourse, setCurrentCourse] = useState({});
  const [currentStats, setCurrentStats] = useState({});
  const [visitorIdentity, setVisitorIdentity] = useState("");
  const [isRegistered, setIsRegistered] = useState(true);

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
              setVisitorIdentity={setVisitorIdentity}
              setIsRegistered={setIsRegistered}
            />
          }
        >
          <Route
            path="/"
            element={
              <Home
                visitorIdentity={visitorIdentity}
                setVisitorIdentity={setVisitorIdentity}
                isRegistered={isRegistered}
                setIsRegistered={setIsRegistered}
              />
            }
          />
        </Route>

        <Route
          path="/dashboard"
          element={
            <Layout
              isLoggedIn={true}
              isDarkModeEnabled={isDarkModeEnabled}
              setIsDarkModeEnabled={setIsDarkModeEnabled}
              navbarTitle={navbarTitle}
            />
          }
        >
          <Route
            path="university"
            element={
              <University
                setNavbarTitle={setNavbarTitle}
                setCurrentCourse={setCurrentCourse}
                setCurrentStats={setCurrentStats}
              />
            }
          />
          <Route
            path="university/course/stats"
            element={<StatsPage stats={currentStats} />}
          />
          <Route
            path="university/course"
            element={
              <CoursePage
                currentCourse={currentCourse}
                setNavbarTitle={setNavbarTitle}
                setCurrentStats={setCurrentStats}
              />
            }
          />
          <Route
            path="university/course/class/stats"
            element={<StatsPage stats={currentStats} />}
          />

          <Route
            path="faculty"
            element={
              <Faculty
                setNavbarTitle={setNavbarTitle}
                setCurrentStats={setCurrentStats}
              />
            }
          />
          <Route
            path="faculty/class/stats"
            element={<StatsPage stats={currentStats} />}
          />

          <Route
            path="student"
            element={
              <Student
                setNavbarTitle={setNavbarTitle}
                setCurrentStats={setCurrentStats}
              />
            }
          />
          <Route
            path="student/feedback"
            element={<Feedback setNavbarTitle={setNavbarTitle} />}
          />
        </Route>

        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
