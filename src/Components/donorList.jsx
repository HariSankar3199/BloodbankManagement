import { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button, Table } from "react-bootstrap";
import DonorChild from "./donorChild";


const DonorList = () => {
    let [donors, setDonors] = useState([])
    let navigate = useNavigate()
    let location = useLocation()
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4200/donors')
            let data = await response.json()
            setDonors(data)
        }
        fetchData()
    }, [donors])
    let handleDelete = (id, name) => {
        // setDonors(donors.filter((x)=>x.id!=id))
        fetch(`http://localhost:4200/donors/${id}`, {
            method: 'DELETE'
        })
        alert(`${name} is deleted from donorlist`)
    }
    let handleRead = (id) => {
        if (location.pathname == "/admin/donor-list") { navigate(`/admin/donor-list/${id}`) }
        else {
            navigate(`/donor/donor-list/${id}`)
        }
    }
    let handleUpd = (id) => {
        navigate(`/admin/update/${id}`)
    }
    return (
        <div className="donorList bg-light ">
            <Container  >
                <div className="fetch row justify-content-evenly mt-3"  >
                    {
                        donors.map((x) => (
                            //backgroundImage:"url(../../images/bg2.jpg)",backgroundSize:"cover" ,opacity:"75%"
                            <div className="donorfetch m-1  col-3"  >
                                <Card style={{ height: "300px", width: "250px" }}>
                                    <Card.Title className="p-1"><h3>{x.name}</h3></Card.Title>
                                    <Card.Body className="text-align-left border-top  " style={{ backgroundImage: "url(../../images/bd8.webp)", backgroundSize: "cover", opacity: "75%" }}>
                                        <h5 > Blood Group:{x.bloodgroup}</h5>
                                        {/* className="text-dark bg-light" */}
                                        <h5 > Age :{x.age}</h5>
                                    </Card.Body>
                                    <Card.Footer className="p-2 m-2">
                                        {location.pathname == "/admin/donor-list" && <Button size="sm" className="m-1" variant="outline-danger" onClick={() => handleDelete(x.id, x.name)} >delete</Button>}
                                        {location.pathname == "/admin/donor-list" && <Button size="sm" className="m-1" variant="outline-danger" onClick={() => handleUpd(x.id)}>update</Button>}
                                        <Button variant="outline-success" size="sm" onClick={() => handleRead(x.id)}>readMore</Button></Card.Footer>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </Container>
            {/* <DonorChild
                 data={} fn1={} fn2={} fn3={} fN1={}/> */}
        </div>
    );
}

export default DonorList;