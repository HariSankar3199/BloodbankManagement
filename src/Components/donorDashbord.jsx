import { Button, Carousel , Container, Row, Col,Card} from "react-bootstrap";
const DonorDashboard = () => {
    return ( 
        <div>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/car1.jpg" height="550px"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Donate Blood </h3>
                    <p>Save Lives</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/car2.jpg"  height="550px"
                    alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Donate Blood </h3>
                    <p>Save Lives</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/car3.jpg"  height="550px"
                    alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Donate Blood </h3>
                    <p>Save Lives</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        
        <Container>
                <Row className="py-5 bg-light rounded-3 mt-3 p-5">
                    
                    <Col>
                    <Card><Card.Body>By donating blood, you can help families who have been in accidents or experienced trauma, mothers experiencing labor complications, fathers having heart surgery, children undergoing chemotherapy treatments, premature babies trying to breathe with tiny lungs, or grandparents suffering from severe anemia.
                        In as little as few minutes, you can become someones unnamed, unknown, but all-important hero. Saving a life is noble work that starts very simply and easily.</Card.Body>
                    <Button variant="outline-success p-2 m-5" href="donor/add-user">clickhere to Register as a Donor</Button></Card>
                        </Col>
                </Row>
            </Container>
        </div>

     );
}
 
export default DonorDashboard;