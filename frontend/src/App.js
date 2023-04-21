import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// Components
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute />} >
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/expenses" element={<PrivateRoute />} >
          <Route path="/expenses" element={<Expenses />} />
        </Route>
        <Route path="/worked" element={<PrivateRoute />} >
          <Route path="/worked" element={<Worked />} />
        </Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
