import React from 'react';


function OrderList(props){
    return (
        <div>
            {props.orders.map(o => {
                return(<div className='coffee-orders'>
            <ul>
               {Object.keys(o).map(k =>{
                   return (
                       <li>{k}: {o[k]}</li>
                   )
               })}
            </ul>

                </div> )
            })}
        </div>
    )
}

export default OrderList;
