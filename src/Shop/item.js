import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';

import { useParams } from 'react-router-dom'

const Item = () => {

  const urlId = useParams();
  console.log(urlId.id);



  useEffect(() => {
    fetchItem()
  }, [])

  const fetchItem = () => {
    fetch(`https://fakestoreapi.com/products/${urlId.id}`)
      .then(res => res.json())
      .then(json => setItem(json))
  }
  const [item, setItem] = useState([])
  // console.log("sss", item);





  return (
    <div  class = "w-25">
      <h1>{item.title}</h1>
      <img alt='' src={item.image} style={{ width: '100%' }} />
      <h3>{item.price} $</h3>
      <p>{item.description}</p>



      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>

    </div>

  )
}

export default Item