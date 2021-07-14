import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { findDepartment } from '../../selectors/findDepartment'

function DepartmentsShow(props){
    const {_id, name} = props.department || {}
    return(
        <div>
            <h2>show-{name} </h2>
            <Link to={`/departments/edit/${_id}`}>Edit</Link> <br/>
            <Link to='/departments'>back</Link>
        </div>
    )
}
const mapStateToProps = (state, props)=>{
    console.log(props)
    const id = props.match.params.id
    return {
      department: findDepartment(state.departments, id),
    };
}
export default connect(mapStateToProps)(DepartmentsShow)