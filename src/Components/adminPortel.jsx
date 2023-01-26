import { Route, Routes } from "react-router-dom";
import BloodBank from "./bloodBank";
import AddDonor from "./addDonor";
import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";
import DonorList from "./donorList";
import ReadMore from "./readMore";
import AddtoBbank from "./addtoBbank";
import FilterData from "./filterData";
import FilterBank from "./filterBank";
import UpDate from "./upDate";

const AdminPortel = () => {
    return (
        <div className=" adminPortel">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>} />
                <Route path="/donor-list" element={<DonorList/>} />
                <Route path='/add-user' element={<AddDonor/>}/>
                <Route path='/donor-list/:id' element={<ReadMore/>} />
                <Route path='/blood-bank' element={<BloodBank/>}/>
                <Route path='/addto-bbank' element={<AddtoBbank/>}/>
                <Route path='/searchgroup' element={<FilterData/>}/>
                <Route path='/searchloc' element={<FilterBank/>}/>
                <Route path='/update/:id' element={<UpDate/>}/>

            </Routes>
        </div>
    );
}

export default AdminPortel;