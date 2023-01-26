import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardImg } from "react-bootstrap";

const ReadMore = () => {
    let params = useParams()
    let [donate, setDonate] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4200/donors/${params.id}`)
            let data = await response.json()
            console.log(data);
            setDonate(data)
        }
        fetchData()
    }, [])
    return (
        <div className="readMore p-5 m-5 rounded-4 bg-light" style={{backgroundImage:"url(../../images/car3.jpg)",backgroundSize:"contain"}}>
            <h1 className="text-white">More Info about donor </h1>
            <Card  className="m-5 p-2 pb-5 mb-5"  style={{backgroundImage:"url(../../images/carbg2.jpg)"}}>
             
                <Card.Title className="p-1 "><h3>{donate.name}</h3></Card.Title>
                <Card.Body className="text-align-left border-top">
                    <h5> Blood Group:{donate.bloodgroup}</h5>
                    <h5> Age :{donate.age}</h5>
                    <h6>Num:{donate.mob}</h6>
                    <h6>Loction:{donate.place}</h6>
                </Card.Body>

            </Card>




        </div>
    );
}

export default ReadMore;