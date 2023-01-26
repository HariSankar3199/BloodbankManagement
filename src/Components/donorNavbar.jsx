import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../Styles/dnav.css'

import 'bootstrap/dist/css/bootstrap.min.css';
const DonorNavbar = () => {
    return (

        <div>
            <Navbar bg="danger" variant="dark"  >
                <Navbar.Brand className="ps-2">
                    <img src="/images/logo2.jpg" class="rounded-circle size-sm" alt="" height="50px" width="50px" />
                </Navbar.Brand>
                <Nav className="dnav">

                    <Nav.Link className="text-light" href="/donor">Donor Dashboard</Nav.Link>
                    <NavDropdown className="text-light" title="Donors" id="nav-dropdown">
                        <Nav.Link className="text-primary" href="/donor/donor-list">DonorList</Nav.Link>
                        <Nav.Link className="text-primary" href="/donor/add-user" eventKey="link-event-key">
                            Register as donor
                        </Nav.Link>
                    </NavDropdown>


                    <Nav.Link href="/">logout</Nav.Link>
                </Nav>

            </Navbar>
            


        </div>
    );
}

export default DonorNavbar; 