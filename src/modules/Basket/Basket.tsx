import React, { useContext } from 'react';

import SearchIcon from '@mui/icons-material/Search';

import './styles.scss';
import {MainContext} from "../../provider/ProviderMain";

export const Basket = () => {
  const { basketBook } = useContext(MainContext);

  const count = basketBook ? basketBook?.reduce((result, item) => result + item?.price, 0) : 0;

  return (
    <main className="content list-books-wrapper basket">

      <div className="page-title">
        <div className="title">
          Basket
        </div>
        <button className="button" >Purchase</button>
      </div>
      <div className="list">
        {
          basketBook?.map((item: any) => {
            return (
              <div className="row"><div>{item?.title}</div><div>  Count  Total</div><div> {item?.price}</div></div>
            )
          })
        }
      </div>
      <div className="total-price flex right">
        <div>Price: <span>{count}</span></div>
      </div>
    </main>
  )
}
