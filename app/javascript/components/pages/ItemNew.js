import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
  } from 'reactstrap'

class ItemNew extends Component {

    
    constructor(props){
        super(props)
        this.state = {
            form:{
                name: "",
                category: "",
                price: 0,
                description: ""
            }
        }
    }
    

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState ({ form: form })
    }

    handleSubmit = () => {
       this.props.createNewItem(this.state.form)
    }

  render() {

    
      
    return (
        <Form>
            <FormGroup>
                <Label>name</Label>
                    <Input
                    type="text"
                    name="name"
                    onChange={ this.handleChange }
                    value={ this.state.form.name }
                    />
            </FormGroup>
            <FormGroup>
                <Label>Category</Label>
                    <Input
                    type="text"
                    name="category"
                    onChange={ this.handleChange }
                    value={ this.state.form.category }
                    />
            </FormGroup>
            <FormGroup>
                <Label>Price</Label>
                    <Input
                    type="text"
                    name="price"
                    onChange={ this.handleChange }
                    value={ this.state.form.price }
                    />
            </FormGroup>
            <FormGroup>
                <Label>Description</Label>
                    <Input
                    type="text"
                    name="description"
                    onChange={ this.handleChange }
                    value={ this.state.form.description }
                    />
            </FormGroup>
        <Button
            name="submit"
            color="secondary"
            onClick={ this.handleSubmit }
            >
            Add new Apartment
        </Button>
    </Form>
      
  )
  
}
}
export default ItemNew