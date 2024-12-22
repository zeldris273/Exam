import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./pages/Home";
import TestList from "./pages/TestList";
import Exam from "./pages/Exam";
import User from "./pages/User";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="tests" element={<TestList />} />
              <Route path="exam" element={<Exam />} />
              <Route path="profile" element={<User />} />
            </Route>
          </Routes>
        </Router>
        <ToastContainer />
    </>
  );
}

export default App;
