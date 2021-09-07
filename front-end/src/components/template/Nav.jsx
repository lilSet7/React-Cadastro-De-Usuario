import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';


export const Nav = props =>
    <aside className="menu-area">
        <nav className='menu'>
          {/* Refatorar mais tarde */}

          <Link to='/'>
            <i className='fa fa-home'></i> Início
          </Link>
          <Link to='/register'>
            <li className='fa fa-address-book'></li> Cadastro
          </Link>
          <Link to='/users'>
            <li className='fa fa-users' ></li> Usuários
          </Link>

        </nav>
    </aside>
