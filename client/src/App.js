import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landin from "./pages/Landin";
import Login from "./pages/Login";
// import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landin />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={<Home />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
