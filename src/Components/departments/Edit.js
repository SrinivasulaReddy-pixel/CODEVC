import React from 'react'
import { connect } from 'react-redux'
import DepartmentsForm from './Form'
import { startUpdateDepartment } from '../../actions/departmentsAction'

function DepartmentUpdate(props){
    const handle = (formData)=>{
        const id= props.match.params.id
        const redirect = ()=> {props.history.push('/departments')}
        props.dispatch(startUpdateDepartment(formData, id, redirect))
    }
    return(
        <div>
            <h2>
            <DepartmentsForm handleSubmit={handle}/>
            </h2>
        </div>

    )
}

export default connect()(DepartmentUpdate)