import { useEffect, useState } from "react";
import { Container, Card ,Button} from "react-bootstrap";
import  axios  from "axios";
import { useLocation} from "react-router-dom";

const BloodBank = () => {
    let [bloodbank, setBloodbank] = useState([])
    let location=useLocation()
    
 
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(' http://localhost:4200/bloodbank')
            let data = await response.json()
            setBloodbank(data)
        }
        fetchData()
    }, [bloodbank])
    let handleDel=(id)=>{
         axios.delete(`http://localhost:4200/bloodbank/${id}`)

    }



    return (
        <div className="bloodBank ">
            <Container className="bg-light p-5 rounded-3 mt-5 mb-5 "  >
                
                <div className="row justify-content-evenly " >
                    {
                        bloodbank.map((x) => (
                            <div className="bmap m-1 ms-2 col-4  p-2" style={{backgroundImage:"url(../../images/carbg2.webp)",backgroundSize:"contain"}}>

                                <Card  style={{height:"350px",width:"330px"}}>
                                    <Card.Header> <h2>Thaluk: {x.taluk}</h2> </Card.Header>
                                    <Card.Title><h3>{x.bbankname}</h3></Card.Title>
                                    <Card.Body >
                                        <h4>Type:{x.htype}</h4>
                                        <h4>Location:{x.location}</h4>
                                    </Card.Body>
                                    <Card.Footer className="p-2">
                                        <h6>Contact No: {x.phone}</h6>
                                        <div > {location.pathname== "/admin/blood-bank" &&<Button variant="primary "  className="mb-3" onClick={() => handleDel(x.id)}>
                                            Delete
                                        </Button>}</div>
                                       
                                    </Card.Footer>
                                </Card>


                            </div>
                        ))
                    }
                </div>


            </Container>

        </div>
    );
}

export default BloodBank;