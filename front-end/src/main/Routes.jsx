import React from 'react';
import { Switch, Route, Redirect  } from 'react-router';
import {Home} from '../components/home/Home';
import FormUser from '../components/register/FormUser';
import ViewUsers from '../components/viewUsers/ViewUsers';
import { UpdateUser } from '../components/update/UpdateUser';
import { ViewUser } from '../components/viewUser/ViewUser';

//config routes
export const Routes = props =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/register' component={FormUser} />
    <Route exact path='/users' component={ViewUsers} />
    <Route exact path='/user/:id?' component={ViewUser} />
    <Route exact path='/update/:id?' component={UpdateUser} />
    <Redirect from='*' to='/' />
  </Switch>
