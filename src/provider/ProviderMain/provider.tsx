import React, { ReactElement, useContext, useState } from 'react';

import { MainContext } from './context';

import { data } from '../../data/data';

export const ProviderMain = (props) => {
  const { children } = props;

  const [listBooks, handleListBooks] = useState<any[any]>(data);
  const [currentBook, handleCurrentBook] = useState(null);
  const [basketBook, handleBasketBook] = useState([]);
  const [token, handleToken] = useState("");

  const onSelectBook = (value) => {
    handleCurrentBook(value);
  }

  const onBasketBook = (value) => {
    handleBasketBook([
      ...basketBook,
      value,
    ]);
  };

  const onRemoveBasketBook = (id) => {
    console.log(listBooks);
    console.log(id);
    handleBasketBook(basketBook.filter((item) => item.id !== id));
  };

  const setToken = (value) => {
    handleToken(value);
  };

  const removeToken = () => {
    handleToken(null);
  };

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
        onRemoveBasketBook: onRemoveBasketBook,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
