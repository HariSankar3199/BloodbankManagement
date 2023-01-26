import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Form, Container, Row, Col, Button ,Stack,Card} from "react-bootstrap";

const AddtoBbank = () => {
    let navigate = useNavigate()
    let [bbankname, setBbankname] = useState('')
    let [location, setLocation] = useState('')
    let [htype, setHtype] = useState()
    let [taluk, setTaluk] = useState('')
    let [phone, setPhone] = useState('')
    let loc=useLocation()
    let handleSubmit = (h) => {
        h.preventDefault()
        let data = { bbankname, taluk, location, htype, phone }
        fetch('http://localhost:4200/bloodbank', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if(loc.pathname==="admin/blood-bank"){ navigate('/admin/blood-bank')}
        else{
            navigate('/donor/bloodbank')
        }
       
    }
    return (
        <div className="addtobbank">
            <div className="addtobbankmain">
                <div className="mainbbimg"></div>
                <div className="mainform">


                    <Container>
                        <Row className="pt-3 pb-3 p-4 rounded-3 mt-3 bg-light" >
                            
                            <Col xs={8} className="bg-transparent">
                                <Form onSubmit={handleSubmit} >

                                    <Form.Group controlId="form-group-id">
                                        <Form.Label className="m-2"> Hospital Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter the BloodBank Name   " required value={bbankname} onChange={(e) => setBbankname(e.target.value)} />
                                    </Form.Group>
                                    <Row>

                                        <Col ><Form.Group  controlId="form-group-id">
                                            <Form.Check.Label className="m-2" required >Hospital Type</Form.Check.Label> 

                                            <Stack className="pt-4"gap={4}>
                                                <div><Form.Check coloumn name="htype" type="radio" required label="Private Hospital" id="radio-button-id" value="Private Hospital" onChange={(e) => setHtype(e.target.value)} /></div>
                                                <div><Form.Check coloumn name="htype" type="radio" required label="Government Hospital" id="radio-button-id" value="Government Hospital" onChange={(e) => setHtype(e.target.value)} /></div>
                                                <div><Form.Check coloumn name="htype" type="radio" required label="Co-Operative Hospital" id="radio-button-id"  value="Co-Operative Hospital" onChange={(e) => setHtype(e.target.value)}/></div>
                                            </Stack>

                                        </Form.Group>
                                        </Col>
                                        <Col > <Form.Group className="m-2" controlId="form-group-id">
                                            Hospitals in Wayanad
                                            <br />
                                            <Form.Label className="m-2" required >Taluk</Form.Label>
                                            <Form.Select placeholder="Taluk" required value={taluk} onChange={(e) => setTaluk(e.target.value)}>
                                            <option name="taluk" value="" >select any option</option>
                                                <option name="taluk" value="Bathery" >Bathery</option>
                                                <option name="taluk" value="Vythiri" >Vythiri</option>
                                                <option name="taluk" value="Manathavady" >Manathavady</option>
                                            </Form.Select>
                                            <Form.Group controlId="form-group-id">
                                                <Form.Label className="m-2">Location</Form.Label>
                                                <Form.Control type="text" placeholder="Hospital Location" required value={location} onChange={(e) => setLocation(e.target.value)} />

                                            </Form.Group>
                                        </Form.Group></Col>
                                    </Row>


                                    <Form.Group controlId="form-group-id">
                                        <Form.Label className="m-2">Contact No</Form.Label>
                                        <Form.Control type="tel" placeholder="ContactNo "   pattern="[0-9]{10}||[0-9]{12}" required value={phone} onChange={(e) => setPhone(e.target.value)} />

                                    </Form.Group>
                                    <Button className="mt-3" variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                            <Col xs={4}><Card> <Card.Img variant="top" src="/images/bg2.jpg" height="440px" width="400px"/> </Card></Col>
                        </Row>
                    </Container>

                </div>
            </div>
        </div>
    );
}

export default AddtoBbank;