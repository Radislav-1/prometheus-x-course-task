import React, { useContext } from 'react';

import SearchIcon from '@mui/icons-material/Search';

import './styles.scss';
import {MainContext} from "../../provider/ProviderMain";

export const Basket = () => {
  const { basketBook } = useContext(MainContext);


  return (
    <main className="content list-books-wrapper basket">

      <div className="page-title">
        <div className="title">
          Basket
        </div>
        <button className="button" >Purchas</button>
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
    </main>
  )
}
