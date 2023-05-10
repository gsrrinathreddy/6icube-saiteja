
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contactus from './Components/Pages/Contactus';
import Clients from './Components/Pages/Clients';
import Aboutus from './Components/Pages/Aboutus';
import Gallery from './Components/Pages/Gallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="Aboutus" element={<Aboutus/>}/>
      <Route path="Clients" element={<Clients/>}/>
      <Route path="Contactus" element={<Contactus/>}/>
      <Route path="Gallery" element={<Gallery/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
