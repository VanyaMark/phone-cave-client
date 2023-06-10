import React from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import {useState, useEffect} from 'react'

const SinglePhone = () => {


    const {id} = useParams

    const [singlePhone, setSinglePhone] = useState(null)

    useEffect(() => {
        axios.get('../phones.json')
            .then(res => {
                setSinglePhone(res.data)
                console.log(singlePhone)
            })
    }, [])

  return (
    <div>

        {singlePhone && 
        <div>
        <h2>{singlePhone.name}</h2>
        </div>}
    </div>
  )
}

export default SinglePhone