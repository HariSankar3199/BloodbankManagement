import { Table, Form, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
const FilterBank = () => {
    let [searchl, setSearchl] = useState('')
    let [bloc, setBloc] = useState([])

    useEffect(() => {
        let fetchData1 = async () => {
            let response1 = await fetch('http://localhost:4200/bloodbank')
            let data1 = await response1.json()
            setBloc(data1)
        }
        fetchData1()
    }, [])
    return (
        <div className="p-3">
        <Form>
            <InputGroup className='my-3'>
                <Form.Control type="text" onChange={(e) => setSearchl(e.target.value)} placeholder="Search BloodbankLocation by taluk(Start with Cap)" />
            </InputGroup>
        </Form>
        <Table striped bordered responsive hover>
            <thead>
                <tr>

                    <th>BloodBank Name</th>
                    <th>Loction</th>
                    <th>Taluk</th>
                </tr>
            </thead>
            <tbody>
                {bloc.filter((y) => {
                    return searchl === '' ? y : y.taluk.includes(searchl)

                    return searchl === '' ? y : y.location.includes(searchl)



                }).map((y) => (
                    <tr key={y.id}>

                        <td>{y.bbankname}</td>
                        <td>{y.location}</td>
                        <td>{y.taluk}</td>

                    </tr>
                ))}
            </tbody>
        </Table>
    </div>

      );
}
 
export default FilterBank ;