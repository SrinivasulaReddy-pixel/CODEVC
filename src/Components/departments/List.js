import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { startGetDepartments, startRemoveDepartment } from '../../actions/departmentsAction';

function DepartmentsList(props) {
  if (props.departments.length === 0) {
    props.dispatch(startGetDepartments());
  }
  const handleRemove = (id)=>{
    const confirmRemove = window.confirm('Are you sure')
    if(confirmRemove){
      const redirect=()=>{props.history.push('/departments')}
      props.dispatch(startRemoveDepartment(id, redirect))
    }
  }

  return (
    <div>
      <h2> Departments List-{props.departments.length}</h2>
      <ul>
        {
          props.departments.map(dept =>{
            return (
              <li key={dept._id}>
                <Link to={`/departments/${dept._id}`}>{dept.name} </Link>
                <button onClick={()=>{
                  handleRemove(dept._id)
                }} > remove </button>
              </li>
            );
          })
        }
      </ul>
      <Link to='/departments/new'> Add </Link>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    departments: state.departments,
  };
};
export default connect(mapStateToProps)(DepartmentsList);
