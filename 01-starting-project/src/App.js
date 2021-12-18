import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="contact" element={<Contacts />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
