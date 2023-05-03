import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import AddBook from "./pages/AddBook";
import EdditBook from "./pages/EdditBook";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add-book" element={<AddBook />} />
            <Route path="edit-book/:id" element={<EdditBook />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
