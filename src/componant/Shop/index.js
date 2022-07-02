import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {getProductElements} from '../../redux/feature/shopSlice'
import { useSelector, useDispatch } from 'react-redux';

const ListItems = () => {
const dispatch=  useDispatch()

  useEffect(() => {
    dispatch(getProductElements())
    // fetchItem()
  }, [])

  // const fetchItem = () => {
  //   fetch('https://fakesto,reapi.com/products')
  //     .then(res => res.json())
  //     .then(json => setproduct(json))
  // }
  // const [products, setproduct] = useState([])
  const products = useSelector(state =>state.bbb.product)
  
  console.log("product",products)
  // console.log("aaa",dispatch(getProductElements(  )))

  return (
    <div className='row container' style={{ 'textAlign': 'center' ,margin:'auto'}}>
      <h1>Shop</h1>
      {products.map((item, i) => {
        return (
          <div className='col-3' key= {i}>
            <Link to={`/item/${item.id}` }  className='border-2' style={{'textDecoration': 'none',color:'#000'}}>
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