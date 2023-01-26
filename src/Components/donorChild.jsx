// import { Container, Card,Button } from "react-bootstrap";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";

// const DonorChild = (prop) => {
//     let donors=prop.data
//     let handleRead= prop.fn2
//     let handleDelete=prop.fn1
//     let location=prop.fn3
//     let navigate=prop.fN1

//     return (  
//         <div>
//              <Container  >
//                  <div className="fetch row justify-content-evenly">
//                     {
//                        donors.map((x)=>(
//                             <div className="donorfetch m-1  col-3">
//                             <Card style={{height:"200px",width:"200px"}}>
//                             <Card.Header><h5>{prop.x.name}</h5></Card.Header>
//                             <Card.Body>
//                             <h5>{x.bloodgroup}</h5>
//                             </Card.Body>
//                             <Card.Footer>
//                            {location.pathname=="/admin/donor-list" && <Button size="sm" className="m-1" variant="outline-danger" onClick={()=>handleDelete(x.id,x.name)} >delete</Button>}
//                             <Button variant="outline-success" size="sm"onClick={()=>handleRead(x.id)}>readMore</Button></Card.Footer>
//                             </Card>
//                             </div>
//                         ))
//                     }
//                  </div>
//                  </Container>
//         </div>
//         );
// }
 
// export default DonorChild;