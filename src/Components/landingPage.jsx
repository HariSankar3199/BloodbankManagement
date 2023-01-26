import { Link } from 'react-router-dom';
import '../Styles/landingPage.css'

import { Navbar, Nav, NavDropdown, Card, Row, Col, Button, Carousel, Tabs, Tab } from "react-bootstrap";

const LandingPage = () => {
    console.log('testing');
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (


        <div className="landingPage fluid mb-5 pb-3" >

            <Navbar bg="red" variant="light" className='land p-2 ps-2 mt-0'>


                <Navbar.Brand >
                    <img src="/images/logo2.jpg" class="rounded-circle size-sm" alt="" height="50px" width="50px" />
                </Navbar.Brand>
                <Nav className="lnav ">
                    <NavDropdown title="BloodBank Login" id="nav-dropdown">
                        <NavDropdown.Item className='text-primary' href="/admin-signin" eventKey="event-key">Admin Login</NavDropdown.Item>
                        <NavDropdown.Item className='text-primary' eventKey="event-key" href="donor/addtobbank">Add Your Bloodbank</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Want to Donate Blood " id="nav-dropdown">
                        <NavDropdown.Item className='text-primary' href="/donor-signin" eventKey="event-key">Donor Login</NavDropdown.Item>
                        {/* <NavDropdown.Item eventKey="event-key">Add Your Bloodbank</NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link eventKey="link-event-key" >

                        </Nav.Link>
                    </Nav.Item>
                </Nav>

            </Navbar>
            <Carousel slide={false} className="bg-light  pb-2">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/car14.webp" height="500px"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-danger '>
                        <h3> <span className="bg-light opacity-75">Blood Bank Management</span> </h3>
                        <p><span className="bg-light opacity-75">Every blood donor is a life saver..</span> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/car12.jpg" height="500px"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-danger  '>
                        <h3  > <span className="bg-light">Blood Bank Management</span> </h3>
                        <p><span className="bg-light opacity-75">The Blood Donor of today may be recipient of tomorrow.</span></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/carbg1.webp" height="500px"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-danger '>
                        <h3>Blood Bank Management</h3>
                        <p>
                            Donate blood and be a hero of someone’s life.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row className='bg-light text-danger m-0 pe-0'>
                <Col className='p-3' ><h3>
                    LEARN ABOUT DONATION
                </h3></Col>
            </Row>



            <Row className=' mb-2 me-0 bg-light'>

                <Col xs={5} className='ps-3 p-2 ms-2 '>
                    <Card style={{ height: "500px", width: "600px" }}>
                        <Card.Img variant="top" src="/images/onethree.webp" />
                        <Card.Body>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</Card.Body>
                        <Card.Footer> <Button href="/donor  " variant="outline-danger">
                            Donate Now
                        </Button>
                        </Card.Footer>
                    </Card></Col>
                <Col className='pt-2 ps-3 ms-4' xs={4} ><img src="/images/bg2.jpg" height={"500px"} width={"745px"} alt="" /></Col>

            </Row>
            <div className='back'>

                <Row className=' m-auto '>
                    <Col className='match p-2 ' xs={6}>
                        <Card>
                            <Card.Img variant="top" src="/images/bld1.jpg" height="350px" width="200px" />
                        </Card>
                        {/* <img src="/images/Blood.jpg" alt=""  /> */}

                    </Col>
                </Row>

            </div>


            <Tabs defaultActiveKey="Tab1" id="tabs-id" className='mb-3 bg-light mt-3' fill>
                <Tab eventKey="Tab1" title="Search For Donors" className="bg-light p-2" >
                    To  search for Donors
                    <div className='ps-3 p-2 ms-2 '>
                        <Button variant="outline-primary" href="donor/searchgroup" onClick={() => console.log("Primary")}>
                            clickhere
                        </Button>
                    </div>

                </Tab>
                <Tab eventKey="ev" title="Search For Bloodbanks " className="bg-light">
                    Here You can search for Available Bloodbanks
                    <div className='ps-3 p-2 ms-2 ' >
                        <Button variant="outline-primary" href="donor/searchloc" onClick={() => console.log("Primary")}>
                            clickhere
                        </Button>
                    </div>
                </Tab>
            </Tabs>

        </div>


    );
}
export default LandingPage;
