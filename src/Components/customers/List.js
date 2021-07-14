import React from 'react';
import { connect } from 'react-redux';
import {startSetCustomer} from '../../actions/customerAction';
import { startRemoveCustomer } from '../../actions/customerAction';
import { Link } from 'react-router-dom';

function CustomerList(props) {
  const handleRemove = (id)=>{
    const confirmRemove = window.confirm('are u sure')
    if(confirmRemove){
      console.log(id)
       props.dispatch(startRemoveCustomer(id))
    }
  }
  if (props.customers.length === 0) {
    props.dispatch(startSetCustomer());
  }
  return (
    <div>
      <h2>Listing Cust-{props.customers.length} </h2>
      <ul>
        {props.customers.map((cust) => {
          return (
            <li key={cust._id}>
              <Link to={`/customers/${cust._id}`}> {cust.name} </Link>
              <button onClick={()=>{
                handleRemove(cust._id)
              }}>remove</button>
            </li>
          );
        })}
      </ul>
      <Link to="/customers/new"> Add</Link>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    customers: state.customers,
  };
};
export default connect(mapStateToProps)(CustomerList);
