import React from 'react';
import { Switch, Route, Redirect  } from 'react-router';
import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';
import FormUser from '../components/register/FormUser';
import ViewUsers from '../components/viewUsers/ViewUsers';

//config routes
export default props =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/register' component={FormUser} />
    <Route exact path='/users' component={ViewUsers} />
    <Redirect from='*' to='/' />
  </Switch>
