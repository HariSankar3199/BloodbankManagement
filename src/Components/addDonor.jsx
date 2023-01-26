import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Form, Container, Button, Row, Col ,Card} from "react-bootstrap";

const AddDonor = () => {
    let navigate = useNavigate()
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [bloodgroup, setBloodgroup] = useState("")
    let [mob, setMob] = useState("")
    let [place, setPlace] = useState("")
    let location = useLocation()
    let handleLogin = (h) => {
        h.preventDefault()
        let data = { name, age, bloodgroup, mob, place }
        fetch('  http://localhost:4200/donors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        )

        console.log(location);
        // admin/add-user 
        //donor/donor-add

        if (location.pathname == "/donor/add-user") {

            navigate(`/donor/donor-list`)
        } else {
            navigate('/admin/donor-list')
        }

        alert('donor is added')

    }
    return (
        <div className="addDonor">
            {/* <div className="Row">
                <div className="col-2">
                    img
                </div>
                <div className="col-6"> */}
            <Container>
                <Row className="mt-5 p-4 rounded-2 bg-light" >
                    <Col xs={6}> <Card> <Card.Img variant="top" src="/images/vol.webp" height="440px"/> </Card></Col>
                    <Col xs={6}>
                        <Form onSubmit={handleLogin}>
                            <Form.Group controlId="form-group-id">
                                        <h4>Register here</h4>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" required placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="form-group-id">
                                <Form.Label>Blood Group</Form.Label>
                                <Form.Select required placeholder="Blood Group" value={bloodgroup} onChange={(e) => setBloodgroup(e.target.value)}>
                                   <option value=""> select any value</option>
                                    <option value="A+ve">A+ve</option>
                                    <option value="A-ve">A-ve</option>
                                    <option value="B+ve">B+ve</option>
                                    <option value="B-ve">B-ve</option>
                                    <option value="AB+ve">AB+ve</option>
                                    <option value="AB-ve">AB-ve</option>
                                    <option value="O+ve">O+ve</option>
                                    <option value="O-ve">O-ve</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="form-group-id">

                                <Form.Label for="age">Age</Form.Label>
                                <Form.Control type="number" min="18" placeholder="Enter your Age" required value={age} onChange={(e) => setAge(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="form-group-id">

                                <Form.Label>Contact No</Form.Label>
                                <Form.Control type="tel" minLength='10' maxLength='10' pattern="[0-9]{10}||[0-9]{12}" required placeholder="Enter your Mobile num" value={mob} onChange={(e) => setMob(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="form-group-id">

                                <Form.Label>Loction</Form.Label>
                                <Form.Control type="text" placeholder="Place" required value={place} onChange={(e) => setPlace(e.target.value)} />
                            </Form.Group>

                            <Button className="mt-3 mb-2" variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
            {/* </div> */}
             {/* </div> */}
            {/* <form action="" onSubmit={handleLogin}>
                <div className="donorname">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="donorgrp">
                    <label htmlFor="">Blood Group</label>
                    <input type="text" placeholder="Blood Group" value={bloodgroup} onChange={(e) => setBloodgroup(e.target.value)} />
                </div>
                <div className="donorage">
                    <label htmlFor="">Enter Your Age</label>
                    <input type="number" placeholder="Enter your Age" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="donornum">
                    <label htmlFor="">Mobile num</label>
                    <input type="tel" minLength='10' maxLength='10' placeholder="Enter your Mobile num" value={mob} onChange={(e) => setMob(e.target.value)} />
                </div>
                <button>Submit</button>
            </form> */}
        </div >
    );
}

export default AddDonor;