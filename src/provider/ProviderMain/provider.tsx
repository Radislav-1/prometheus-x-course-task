import React, { ReactElement, useContext, useState } from 'react';

import { MainContext } from './context';

import { data } from '../../data/data';

export const ProviderMain = (props) => {
  const { children } = props;

  const [listBooks, handleListBooks] = useState(data);
  const [currentBook, handleCurrentBook] = useState(null);
  const [basketBook, handleBasketBook] = useState([]);
  const [token, handleToken] = useState("KR");

  const onSelectBook = (value) => {
    handleCurrentBook(value);
  }

  const onBasketBook = (value) => {
    handleBasketBook([
      ...basketBook,
      value,
    ]);
  }
  const setToken = (value) => {
    handleToken(value);
  }

  const removeToken = () => {
    handleToken(null);
  }

  return (
    <MainContext.Provider
      value={{
        token: token,
        listBooks: listBooks,
        currentBook: currentBook,
        basketBook: basketBook,
        onSelectBook: onSelectBook,
        onBasketBook: onBasketBook,
        setToken: setToken,
        removeToken: removeToken,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
