import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Phones = () => {

const [phones, setPhones] = useState([])

useEffect(() => {
axios.get('../phones.json')
        .then(res => {
            setPhones(res.data)
            console.log('phones', phones) 
        })
}, [])

  return (
    <div>

       <Container>
        <Row className="d-flex flex-row">
            {phones.map(phone => (
                <div key={phone.id}>
                    <div>
                    <h1>{phone.name}</h1>
                    <p>{phone.description}</p>
                    <p>Manufacturer: {phone.manufacturer}</p>
                    <p>Price: {phone.price}</p>
                    </div>
                </div>
            )
            )}
        </Row>
       </Container>
    </div>
  )
}

export default Phones