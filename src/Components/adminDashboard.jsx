import { Carousel,Tabs,Tab,Row,Col,Button } from "react-bootstrap";
const AdminDashboard = () => {
    return ( <div className="adminDashboard">
    
        
            <Carousel className="mt-3">
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="/images/car13.png" height="400px"
                        alt="First slide"
                    />
                    <Carousel.Caption  className="text-danger">
                        <h3>Collect and manage data</h3>
                        <p>Make necessary Changes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  "
                        src="/images/carbg2.jpg" height="400px"
                        alt="Second slide"
                    />
                    <Carousel.Caption  className="text-danger">
                        <h3>Collect and manage data</h3>
                        <p>Make necessary Changes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  "
                        src="/images/bg4.webp" height="400px"
                        alt="Third slide" 
                    />
                    <Carousel.Caption className="text-danger">
                        <h3>Collect and manage data</h3>
                        <p>Make necessary Changes</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Tabs defaultActiveKey="Tab1" id="tabs-id" className='mb-3 bg-light mt-3' fill>
                <Tab eventKey="Tab1" title="Search For Donors" className="bg-light p-2" >
                    <Row>
                         <Col><img src="/images/bg2.jpg" height="200px" width="400px" alt="" /></Col>
                         <Col className="text-center pt-5"> To  search for Donors
                    <div className='ps-3 p-2 ms-2 '>
                        <Button variant="outline-primary" href="donor/searchgroup" onClick={() => console.log("Primary")}>
                            clickhere
                        </Button>
                    </div></Col>
                    </Row>
                   

                </Tab>
                <Tab eventKey="ev" title="Search For Bloodbanks " className="bg-light">
                    
                    <Row>
                         <Col><img src="/images/bd7.jpg" height="200px" width="400px" alt="" /></Col>
                         <Col className="text-center pt-5">
                         Here You can search for Available Bloodbanks
                         <div className='ps-3 p-2 ms-2 ' >
                        
                        <Button variant="outline-primary" href="donor/searchloc" onClick={() => console.log("Primary")}>
                            clickhere
                        </Button>
                    </div></Col>
                    </Row>
                    
                </Tab>
            </Tabs>
    
    </div> );
}
 
export default AdminDashboard;