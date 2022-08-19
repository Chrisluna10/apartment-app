import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap'

class ItemShow extends Component {
  render() {
      console.log(this.props.item)
    let {item} = this.props
    return (
        
      <div className="page-body" >
          
      {item && 
          <Card className="card-show">
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">item number {item.id} </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{item.street}</CardSubtitle>
            <CardText>

            </CardText>
            <NavLink to={`/itemsedit/${item.id}`}>
            <Button>Edit item</Button>
            </NavLink>
          </CardBody>
        </Card>
      }
    </div>
  )
}
}
export default ItemShow