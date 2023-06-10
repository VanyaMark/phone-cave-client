import logo from './logo.svg';
import './App.css';
import Phones from './pages/Phones';
import { Route, Routes, useRoutes } from "react-router-dom"
import SinglePhone from './pages/SinglePhone';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/phones" element={<Phones/>} />
    <Route path="/phones/:id" element={<SinglePhone/>} />
</Routes>
    </div>
  );
}

export default App;
