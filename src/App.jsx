import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./pages/Home";
import TestList from "./pages/TestList";
import Exam from "./pages/Exam";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tests" element={<TestList />} />
          <Route path="exam" element={<Exam />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
