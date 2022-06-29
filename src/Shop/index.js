import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ListItems = () => {


  useEffect(() => {
    fetchItem()
  }, [])

  const fetchItem = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setproduct(json))
  }
  const [products, setproduct] = useState([])
  console.log("sss", products);
  return (
    <div>
      <h1>Shop</h1>

      {products.map((item, i) => {
        return (
          <div >
            <Link to={`/item/${item.id}`} key= {i}>
              <img alt='' src={item.image} style={{ width: '50%' }} />
              <p>{item.title}</p>
              <p>{item.price}</p>
            </Link>
          </div>
        )
      })
      }
    </div>
  )
}

export default ListItems