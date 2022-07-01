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
  return (
    <div className='row container' style={{ 'text-align': 'center' ,margin:'auto'}}>
      <h1>Shop</h1>
      {products.map((item, i) => {
        return (
          <div className='col-3' >
            <Link to={`/item/${item.id}` } key= {i} className='border-2' style={{'text-decoration': 'none',color:'#000'}}>
              <img alt='' src={item.image} style={{ width: '100%',height:'25rem' }} />
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