
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Card,Button ,Col,Row,Form} from "react-bootstrap";
import axios from 'axios';
const UpDate = () => {
let [name,setName]=useState("")
let [age,setAge]=useState("")
let [bloodgroup,setBloodgroup]=useState("")
let [mob,setMob]=useState("")
let [place,setPlace]=useState("")
let navigate=useNavigate()
let data={name,age,mob,bloodgroup,place}
let params=useParams()
 useEffect(()=>{
    axios.get(`http://localhost:4200/donors/${params.id}`) //for using this id use params is required
    .then((upd)=>{
        setName(upd.data.name);
        setAge(upd.data.age);
        setBloodgroup(upd.data.bloodgroup);
        setMob(upd.data.mob);
        setPlace(upd.data.place);
    });

 },[])
 let Update=(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:4200/donors/${params.id}`,data).then(navigate("/admin/donor-list")) //for using this id use params is required
 }
    return ( 
        <div>
<Container>
                <Row className="mt-5 p-4 rounded-2 bg-light" >
                    <Col xs={6}> <Card> <Card.Img variant="top" src="/images/vol.webp" height="440px"/> </Card></Col>
                    <Col xs={6}>
                        <Form >
                            <Form.Group controlId="form-group-id">
                                        <h4>Update here</h4>
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

                            <Button className="mt-3 mb-2" variant="primary" type="submit"  onClick={Update}>
                                Update
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
     );
}
 
export default UpDate;