import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BanuPost from "./pages/BanuPost";
import BeyrekPost from "./pages/BeyrekPost";
import Post1 from "./pages/Post1";
import Post2 from "./pages/Post2";
import Post3 from "./pages/Post3";
import Post4 from "./pages/Post4";
import Post5 from "./pages/Post5";
import Post6 from "./pages/Post6";
import Post7 from "./pages/Post7";
import Post8 from "./pages/Post8";
import Post13 from "./pages/Post13";
import AIChat from "./pages/AIChat";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post1" element={<Post1 />} />
        <Route path="/post2" element={<Post2 />} />
        <Route path="/post3" element={<Post3 />} />
        <Route path="/post4" element={<Post4 />} />
        <Route path="/post5" element={<Post5 />} />
        <Route path="/banu" element={<BanuPost />} />
        <Route path="/beyrek" element={<BeyrekPost />} />
        <Route path="/post6" element={<Post6 />} />
        <Route path="/post7" element={<Post7 />} />
        <Route path="/post8" element={<Post8 />} />
        <Route path="/post13" element={<Post13 />} />
        <Route path="/ai-chat" element={<AIChat />} />
      </Routes>
    </Router>
  );
}

export default App;
