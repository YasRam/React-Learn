import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';

import { useParams } from 'react-router-dom'

const Item = () => {

  const urlId = useParams();



  useEffect(() => {
    fetchItem()
  }, [])

  const fetchItem = () => {
    fetch(`https://fakestoreapi.com/products/${urlId.id}`)
      .then(res => res.json())
      .then(json => setItem(json))
  }
  const [item, setItem] = useState([])





  return (
    <div className="  " style={{ margin: 'auto', width: '30%' }}>
      <h1>{item.title}</h1>
      <img alt='' src={item.image} style={{ width: '100%' }} />
      <h3>{item.price} $</h3>
      <p>{item.description}</p>


    </div>

  )
}

export default Item