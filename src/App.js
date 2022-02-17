import "./App.css";
import Posts from "./components/Posts";
import SinglePostPage from "./components/SinglePostPage";
import data from "./data.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Posts data={data} />}></Route>
          <Route
            path="/single-post-page/:id"
            element={<SinglePostPage data={data} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
