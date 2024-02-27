import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <Routes>
            <Route path="/home" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} exact />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
