import { Table, Form, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const FilterData = () => {
    let [bgroup, setBgroup] = useState([])
    let [search, setSearch] = useState('')
   
    useEffect(() => {

        let fetchData = async () => {
            let response = await fetch('http://localhost:4200/donors')
            let data = await response.json()
            setBgroup(data)
        }
        fetchData()
    }, [])

    

    return (
        <div className="p-3">
            <div>
                <Form>
                    <InputGroup className='my-3'>
                        <Form.Control type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Bloodgroup" />
                    </InputGroup>
                </Form>
                <Table striped bordered responsive hover>
                    <thead>
                        <tr>

                            <th>First Name</th>
                            <th>Age</th>
                            <th>Bloodgroup</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bgroup.filter((x) => {
                            return search.toLowerCase() === '' ? x : x.bloodgroup.toLowerCase().includes(search)

                        }).map((x) => (
                            <tr key={x.id}>

                                <td>{x.name}</td>
                                <td>{x.age}</td>
                                <td>{x.bloodgroup}</td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
           
        </div>
    );
}

export default FilterData;