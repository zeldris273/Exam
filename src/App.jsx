import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TestList from "./pages/TestList";
import Exam from "./pages/Exam";
import User from "./pages/User";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="pt-14">
          <Routes>
            <Route path="/" element={<HomeWithFooter />} />
            <Route path="tests" element={<TestList />} />
            <Route path="exam" element={<Exam />} />
            <Route path="profile" element={<User />} />
          </Routes>
        </div>
        <ToastContainer />
      </Router>
    </>
  );
}

const HomeWithFooter = () => (
  <>
    <Home />
    <Footer />
  </>
);

export default App;