import React, { useContext } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import './styles.scss';
import {MainContext} from "../../provider/ProviderMain";

export const Basket = () => {
  const { basketBook, onRemoveBasketBook } = useContext(MainContext);

  const count = basketBook ? basketBook?.reduce((result, item) => result + item?.price, 0) : 0;

  return (
    <main className="content list-books-wrapper basket">

      <div className="page-title flex right">
        <button className="button" >Purchase</button>
      </div>
      {
        basketBook?.length > 0 && (
          <>
            <div className="list">
              {
                basketBook?.map((item: any) => {
                  return (
                    <div className="row">
                      <div>{item?.title}</div>
                      <div>Count: {item?.price}</div>
                      <div>
                        <CloseIcon className="icon-button" onClick={() => onRemoveBasketBook(item?.id)}/>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="total-price flex right">
              <div>Price: <span>{count}</span></div>
            </div>
          </>
        )
      }
      {
        !basketBook?.length && (
          <div className="flex">
            <div className="empty-basket">
              <div className="flex">
                <ShoppingBasketIcon className="icon"/>
              </div>
              <div>Cart is empty...</div>
            </div>
          </div>
        )
      }
    </main>
  )
}
