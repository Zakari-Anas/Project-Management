import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Create from './component/Create';
import NavBar from './component/NavBar';

function App() {
  return (
    <div className="App">

      <NavBar drawerWidth={240} content={
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      } />

    </div>
  );
}

export default App;
