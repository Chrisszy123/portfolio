import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, ProjectDetails } from "./components";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
