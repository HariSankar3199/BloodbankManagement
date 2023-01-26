import {  Link } from "react-router-dom";
import '../Styles/adminNavbar.css'
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";

const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
             <Navbar bg="red" variant="light" className='land p-0 ps-2 mt-0'>


<Navbar.Brand >
    <img src="/images/logo2.jpg" class="rounded-circle size-sm" alt="" height="50px" width="50px" />
</Navbar.Brand>
<Nav className="nN">
<Nav.Item>
        <Nav.Link eventKey="link-event-key" href="/admin/" >
        Admin Dashboard
        </Nav.Link>
    </Nav.Item>
    <NavDropdown title="Blood Banks" id="nav-dropdown">
        <NavDropdown.Item className='text-primary' href="/admin/blood-bank" eventKey="event-key">Our Blood Banks</NavDropdown.Item>
        <NavDropdown.Item className='text-primary' eventKey="event-key"  href='/admin/addto-bbank'>Add Your Bloodbank</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title=" Blood Donors" id="nav-dropdown">
        <NavDropdown.Item className='text-primary' href="/admin/donor-list" eventKey="event-key">Donor List</NavDropdown.Item>
        <NavDropdown.Item className='text-primary' href="/admin/add-user" eventKey="event-key">Register New Donor</NavDropdown.Item>
        {/* <NavDropdown.Item eventKey="event-key">Add Your Bloodbank</NavDropdown.Item> */}
    </NavDropdown>
    
    <Nav.Item>
        <Nav.Link eventKey="link-event-key" href="/" >
Logout
        </Nav.Link>
    </Nav.Item>
</Nav>

</Navbar>
            {/* <div className="navmain navbar navbar-expand">
                
                <div className="navlogo navbar-brand">
                    <img  height='60px' src="" alt="" />
                </div>
                <div className="navlists">
                    <ul  className="navbar-nav">
                        <li className="navbar-item">< Link className="Navbar-link" to='/admin/'>Admin Dashboard</ Link></li>
                    
                        
                        <li className=" nav-item  dropdown">< Link to='/admin/blood-bank' >Blood Banks</ Link></li>
                        <li className="navbar-item">< Link to="/admin/donor-list">Donors List</ Link></li>
                        <li className="navbar-item">< Link to='/admin/add-user'>Add Donors</ Link></li>
                        <li className="navbar-item">< Link to='/admin/addto-bbank'>Add Bloodbanks</ Link></li>
                        <li className="navbar-item">< Link to='/'>Logout</ Link></li>
                    </ul>
                </div>
            </div> */}
        </div>
     );
}
 
export default AdminNavbar;