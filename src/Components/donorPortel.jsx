import { Route, Routes } from "react-router-dom";
import DonorDashboard from "./donorDashbord";
import DonorList from "./donorList";
import DonorNavbar from "./donorNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddDonor from "./addDonor";
import ReadMore from "./readMore";
import FilterBank from "./filterBank";
import FilterData from "./filterData";
import BloodBank from "./bloodBank";
import AddtoBbank from "./addtoBbank";




const DonorPortel = () => {
    return (  
        <div>

<DonorNavbar/>
<Routes>
    <Route path="/" element={<DonorDashboard/>}/>
    <Route path="/donor-list" element={<DonorList/>}/>
    <Route path="/add-user" element={<AddDonor/>}/>
    <Route path='/donor-list/:id' element={<ReadMore/>} />
    <Route path='/searchgroup' element={<FilterData/>}/>
    <Route path='/searchloc' element={<FilterBank/>}/>
    <Route path='/bloodbank' element={<BloodBank/>}/>
    <Route path='/addtobbank' element={<AddtoBbank/>}/>

</Routes>

        </div>
    );
}
 
export default DonorPortel;