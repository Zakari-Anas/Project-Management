import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Create from './component/Create';
import NavBar from './component/NavBar';
import Edit from './component/Edit';
import Delete from './component/Delete';

function App() {
  return (
    <div className="App">

      <NavBar drawerWidth={240} content={
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      } />

    </div>
  );
}

export default App;
