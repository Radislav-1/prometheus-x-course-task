import React, { useContext } from 'react';

import './styles.scss';
import {MainContext} from "../../provider/ProviderMain";

export const Book = () => {
  const { onSelectBook } = useContext(MainContext);

  return (
    <main className="content book-wrapper">
      <img src="../images/library/websocket.jpg" alt="корзина"/>
        <div className="book">
          <h2>WebSocket</h2>
          <p><span className="bold">Book author:</span>Andrew Lombardi</p>
          <p><span className="bold">Book level:</span>Beginner</p>
          <p><span className="bold">Book tags:</span>core</p>
        </div>
        <div className="prise">
          <div className="row"><span>Price:</span><span id="price">52.72</span></div>
          <div className="row">
            <label>Count</label>
            <input type="number" id="name" name="number"/>
          </div>
          <div>
            <div className="row"><span>Total price:</span><span id="price-total">52.72</span></div>
          </div>
          <button
            className="button"
            onClick={() => onSelectBook()}
          >
            Add to cart
          </button>
        </div>
    </main>
  )
};
