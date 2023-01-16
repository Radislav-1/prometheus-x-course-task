import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {MainContext} from "../../../provider/ProviderMain";

export const Header = () => {
  const { basketBook, token } = useContext(MainContext);

  return (
    <header className="header">
      <h1>JS BAND STORE/ Radislav Derkach</h1>
      <div className="user-info">
        <Link to="/basket" className="button-icon">
         <ShoppingBasketIcon className="icon" />
          {basketBook?.length}
        </Link>
        <div className="menu flex left">
          <Link to="/books">
            Books
          </Link>
          <Link to="/book">
            Book
          </Link>
          <Link to="/sign-in">
            SignIn
          </Link>
        </div>
        <button className="button">Sign-Out</button>
        <div className="avatar">{token}</div>
        <span>Test User</span>
      </div>
    </header>
  )
}
