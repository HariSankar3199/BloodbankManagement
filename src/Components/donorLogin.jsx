import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col, Tabs, Tab } from "react-bootstrap";
const DonorLogin = () => {



    let navigate = useNavigate()


    let handleSignin = () => {
        navigate('/donor')
    }
    return (
        <div className="donorLogin">
            <h1 className="bg-red text-light p-2">Donate Blood And Save Life</h1>
            {/* <h1>Donate Blood And Save Life</h1> style={{ width: '18rem' }} */}
            <Row className="p-5">

                <Col>

                    <Card >
                        <Card.Img variant="top" className="border-none" src="/images/benefits.jpg" />

                    </Card>
                </Col>

                {/* <Col>b</Col>
                <Col>c</Col> */}
            </Row>
            <Row className="pt-2 m-2"><Col><Button variant="outline-danger" onClick={handleSignin}>click here to register as a donor</Button></Col></Row>
            <Tabs defaultActiveKey="Tab1" id="tabs-id" className='mb-3 bg-light mt-3' fill>
                <Tab eventKey="Tab1" title="Blood cell production" className="bg-light p-2" >
                    TAfter a person donates blood, the body will replenish the blood loss by stimulating the production of new blood cells. The new blood cells would help in maintaining a person’s good health


                </Tab>
                <Tab eventKey="ev" title=" Prevents hemochromatosis" className="bg-light">
                    Donating blood would reduce the risk of developing hemochromatosis. This health condition could be inherited at our cost due to alcoholism, anaemia and various other disorders.

                </Tab>
                <Tab eventKey="ev2" title="Lowering cancer risk" className="bg-light p-2" >

                    Donating blood helps lower the risk of cancer as the iron stores in the blood are maintained at healthy levels. When there is a reduced iron level in the body, it is linked to lower cancer risk. At the same time, when the iron is too low in the body, it leads to iron deficiency and other related health conditions.

                </Tab>
                <Tab eventKey="ev3" title="Heart and liver health" className="bg-light p-2" >

                    Donating blood is beneficial as it reduces the risk of heart and liver ailments which are caused due to iron overload in the body. When people consume excess food in the body, they only absorb limited proportions, and the rest of it gets stored in the heart, liver, or pancreas.

                    Excess iron present in the body will increase the risk of developing health conditions like liver failure, pancreatic damage, or heart abnormalities.

                    Therefore, by donating blood, the body can maintain the required levels of iron and reduce the risk of various health conditions.
                </Tab>


            </Tabs>



            {/* <Row className="p-2 bg-light">
                <Col>

                    <Row> <h3>Benefits of Blood Donation</h3></Row>
                    <Row className="pt-2"><Col ><Card ><Card.Title style={{ height: "25px" }} >Prevents hemochromatosis </Card.Title><Card.Body>Donating blood would reduce the risk of developing hemochromatosis. This health condition could be inherited at our cost due to alcoholism, anaemia and various other disorders.</Card.Body></Card></Col>
                        <Col><Card><Card.Title>Blood cell production</Card.Title><Card.Body>After a person donates blood, the body will replenish the blood loss by stimulating the production of new blood cells. The new blood cells would help in maintaining a person’s good health</Card.Body></Card></Col></Row>

                    <Row className="pt-2"><Col><Card><Card.Title>Lowering cancer risk</Card.Title><Card.Body>Donating blood helps lower the risk of cancer as the iron stores in the blood are maintained at healthy levels. When there is a reduced iron level in the body, it is linked to lower cancer risk. At the same time, when the iron is too low in the body, it leads to iron deficiency and other related health conditions.</Card.Body></Card></Col></Row>
                    <Row className="pt-2"><Col><Card><Card.Title>Heart and liver health</Card.Title><Card.Body>Donating blood is beneficial as it reduces the risk of heart and liver ailments which are caused due to iron overload in the body. When people consume excess food in the body, they only absorb limited proportions, and the rest of it gets stored in the heart, liver, or pancreas.

                        Excess iron present in the body will increase the risk of developing health conditions like liver failure, pancreatic damage, or heart abnormalities.

                        Therefore, by donating blood, the body can maintain the required levels of iron and reduce the risk of various health conditions.  </Card.Body></Card></Col></Row>

                </Col>
            </Row> */}

        </div >
    );
}

export default DonorLogin;