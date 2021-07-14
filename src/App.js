import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Home from './Components/auth/Home';
import QuickLinks from './Components/navigation/QuickLinks';
import Account from './Components/auth/Account';
import startLogout from './actions/userAction'

import CustomerList from './Components/customers/List';
import ShowCustomer from './Components/customers/Show';
import AddCustomer from './Components/customers/Add';
import EditCustomer from './Components/customers/Edit';

import DepartmentsList from './Components/departments/List';
import AddDepartment from './Components/departments/Add';
import DepartmentsShow from './Components/departments/Show'
import DepartmentUpdate from './Components/departments/Edit';

function App(props) {
  console.log('app', props);
  const handleLogout = ()=>{
    props.dispatch(startLogout())
  }
  return (
    <BrowserRouter>
      <div>
        <h1>Ticket Master</h1>
        <Link to="/home"> Home </Link>

        {Object.keys(props.user).length === 0 ? (
          <div>
            <Link to="/users/login"> Login </Link>
            <Link to="/users/register"> Register </Link>
          </div>
        ) : (
          <div>
            <Link to="/customers"> Customers </Link>
            <Link to="/users/account"> Account </Link>
            <Link to="/departments">Departments</Link>
            <Link
              to="#"
              onClick={() => {
                handleLogout();
              }}
            >
              {' '}
              Logout{' '}
            </Link>
          </div>
        )}

        <QuickLinks />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/users/login" component={Login} />
          <Route path="/users/register" component={Register} />
          <Route path="/users/account" component={Account} />

          <Route path="/customers" component={CustomerList} exact={true} />
          <Route path="/customers/new" component={AddCustomer} />
          <Route path="/customers/edit/:id" component={EditCustomer} />
          <Route path="/customers/:id" component={ShowCustomer} />

          <Route path="/departments" component={DepartmentsList} exact={true} />
          <Route path="/departments/new" component={AddDepartment} />
          <Route path="/departments/edit/:id" component={DepartmentUpdate} />
          <Route path="/departments/:id" component={DepartmentsShow} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
