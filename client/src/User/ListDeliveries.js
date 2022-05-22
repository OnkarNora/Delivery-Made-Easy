import React from 'react'
import {ListGroup} from 'react-bootstrap'

function ListDeliveries({deliveries}) {
    return (
        <ListGroup as="ol" numbered>
            {deliveries.map((item,id)=>{
                return (
                <ListGroup.Item
                    as="li"
                    className="d-flex h4 "
                    key={id}
                    >

                    <div className="ms-2 me-auto text-justify">
                        <div className="fw-bold">{item.name}</div>
                        <div className='d-flex flex-column ' >
                            <div>weight : {item.weight}</div>
                            <div>Pointes : {item.points}</div>
                            <div>From : {item.from}</div>
                            <div>To : {item.to}</div>
                            <div>Status : {item.status}</div>
                            <div>id : {item.id}</div>
                        </div>
                        
                    </div>
                    <hr/>
                </ListGroup.Item>
                )
            })
            }
        </ListGroup>
    )
}

export default ListDeliveries