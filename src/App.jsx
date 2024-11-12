import { BrowserRouter , Routes, Route } from "react-router-dom";
import NotFound from "./components/error/Error";
import Home from "./components/home/Home";
import Editor from "./components/editor/Editor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Editor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
