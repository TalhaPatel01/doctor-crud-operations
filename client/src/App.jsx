import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleElement from './components/SimpleElement'
import ComplexElement from './components/ComplexElement'
import { PropsDemo } from './components/PropsDemo'
import Doctor from './components/getDoctor/Doctor.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Add from './components/addDoctor/Add.jsx';
import Edit from './components/updateDoctor/Edit.jsx';
import Register from './components/Register.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/register" element={<Register />} />,
            <Route path="/" element={<Doctor />} />
            <Route path="/add" element={<Add />} />,
            <Route path="/edit/:id" element={<Edit />} />,
          </Routes>
        </div>
      </Router>

      {/* <div>
        <SimpleElement/>
        <ComplexElement/>
        <PropsDemo/>
      </div> */}
      
    </>
  );
}

export default App;