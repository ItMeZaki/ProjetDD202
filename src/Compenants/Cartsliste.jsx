import React from 'react'
import { useSelector } from 'react-redux'

function Cartsliste() {
    const carts=useSelector((state)=>state.carts.carts);
    console.log(carts)

  return (
    <div>
        <table >
            <thead className='table'>
                <tr>
                    <th scope='col'>id</th>
                    <th scope='col'>discountedTotal</th>
                    <th scope='col'>total</th>
                    {/* <th scope='col'>userId</th>
                    <th scope='col'>totalProducts</th>
                    <th scope='col'>totalQuantity</th> */}
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                {carts && carts.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td> {item.id} </td>
                            <td>{item.discountedTotal}</td>
                            <td> {item.total} </td>
                            {/* <td> {item.userId} </td>
                            <td>{item.totalProducts}</td>
                            <td>{item.totalQuantity}</td> */}
                            <td>
                                
                                <button type="submit" className="btn btn-info">Edit</button>
                                    
                                <button type="submit" className="btn btn-danger" >Delete </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Cartsliste