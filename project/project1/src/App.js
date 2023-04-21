import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Aboutus  from './Components/Pages/Aboutme';
import Experience from './Components/Pages/Experience';

import Hobbies from './Components/Pages/Hobbies';
import Qualifications from './Components/Pages/Qualifications';
import Skills from './Components/Pages/Skills';





function App() {
  return (
    <div className="App">
         <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Experience"  element={<Experience/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Qualifications" element={<Qualifications/>}/>
        <Route path="Skills" element={<Skills/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
