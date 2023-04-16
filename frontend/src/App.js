import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// Components
import NavBar from "./components/NavBar";

// Pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Expenses from "./pages/Expenses";
import Worked from "./pages/Worked";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/worked" element={<Worked />} />
      </Routes>
     </Router>
    </>
  );
}

export default App;
