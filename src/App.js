
import './App.css';


import LandingPage from './Components/landingPage';
import AdminLogin from './Components/adminLogin';
import DonorLogin from './Components/donorLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPortel from './Components/adminPortel';
import DonorPortel from './Components/donorPortel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin-signin' element={<AdminLogin/>}/>
        <Route path='/donor-signin' element={<DonorLogin/>}/>
        <Route path ='admin/*' element={<AdminPortel/>}/>
        <Route path ='donor/*' element={<DonorPortel/>}/>
      
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
