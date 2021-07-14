import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { findCustomer } from '../../selectors/findCustomer'

class FormCustomer extends React.Component{
    constructor(props){
        super(props)
        console.log('props',props)
        this.state = {
            name: props.customer? props.customer.name : '',
            email: props.customer? props.customer.email : '',
            mobile: props.customer? props.customer.mobile : ''
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
       this.props.handleSubmit(formData)
    }

    render(){
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              /> <br/>

              <label htmlFor="email">email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              /><br/>

              <label htmlFor="mobile">mobile</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={this.state.mobile}
                onChange={this.handleChange}
              /><br/>
              <input type='submit' value='submit' />
            </form>
          </div>
        );
    }
}
const mapStateToProps = (state, props) =>{
  console.log('form', props)
    const id = props.match.params.id
    return {
        customer: findCustomer(state.customers, id)
    }
}

export default withRouter(connect(mapStateToProps)(FormCustomer))