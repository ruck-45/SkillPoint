// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";

// Local Files
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
    </>
  );
}

export default App;
