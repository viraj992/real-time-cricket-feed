import React from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Service from './pages/Service';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Routes>
          <Route path="/signup" exact element={<Signup />} />
        </Routes>

        <Routes>
          <Route path="/service" exact element={<Service />} />
        </Routes>

        <Routes>
          <Route path="/login" exact element={<Login/>} />
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;



// import React from 'react';
// import './App.css';
// import Home from './pages/Home';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
