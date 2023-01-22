import React, { useState, useContext, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import './styles.scss';

import { MainContext } from "../../provider/ProviderMain";

export const ListBooks = () => {
  const { listBooks, currentBook, onSelectBook, onBasketBook } = useContext(MainContext);

  console.log('currentBook: ', currentBook);

  const [search, handleSearch] = useState('');
  const [price, handlePrice] = useState<any>('');
  const [count, handleCount] = useState<any>(1);
  const [list, handleList] = useState<any>(listBooks?.books);

  const onSearch = (e) => {
    const value = e?.target?.value;

    handleSearch(value);
  };

  useEffect(() => {
    let filtered = [...listBooks?.books];

    if (search) {
        filtered = filtered?.filter((item: any) => {
          return item?.title?.toLowerCase().includes(search.toLowerCase());
        });
      }

      if (price) {
        filtered = filtered ? filtered?.filter((item: any) => {
          if (price === 10) {
            return item?.price < price && item?.price > 0;
          }

          if (price === 50) {
            return item?.price < price && item?.price > 10;
          }

          if (price === 100) {
            return item?.price < price && item?.price > 50;
          }
        }) : [];
      }

      handleList(search || price ? filtered : list);
  }, [price, search]);

  if (currentBook) {
    return (
      <main className="content book-wrapper">
        <button
          className="back-button flex between"
          onClick={() => onSelectBook(null)}
        >
          <KeyboardBackspaceIcon className="icon"/>
          Back
        </button>
        <div className="book-details flex between top">
          <img
            src={currentBook.image }
            alt={currentBook.title}
          />
          <div className="book-info">
            <h2>{currentBook?.title}</h2>
            <p><span className="bold label">Book author:</span>{currentBook?.author}</p>
            <p><span className="bold label">Book level:</span>Beginner</p>
            <p><span className="bold label">Book tags:</span>core</p>
          </div>
          <div className="book-price">
            <div className="prise">
              <div className="row"><span className="bold label">Price:</span><span id="price">{currentBook?.price}</span></div>
              <div className="row">
                <label className="bold label">Count: </label>
                <input
                  type="number"
                  id="name"
                  name="number"
                  onChange={(e) => handleCount(e?.target?.value)}
                />
              </div>
              <div>
                <div className="row"><span className="bold label">Total price:</span><span id="price-total">{currentBook?.price * count}</span></div>
              </div>
              <br />
              <button
                className="button"
                onClick={() => {
                  onBasketBook({
                      ...currentBook,
                      price: currentBook?.price * count,
                    });
                    onSelectBook(null);
                  }
                }
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
    )
  }


  return (
    <main className="content list-books-wrapper">
      <div className="search-panel">
        <div className="search input-wrapper">
          <input type="text"  value={search} placeholder="Search by book name" onChange={onSearch}/>
            <button className="icon">
              {/*<svg style="width:24px;height:24px" viewBox="0 0 24 24">*/}
              {/*  <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />*/}
              {/*</svg>*/}
              <SearchIcon className="iconb" />
            </button>
        </div>
        <div className="prise">
          <select
            onChange={(e: any) => handlePrice(e?.target?.value - 0)}
          >
            <option value="10">From 0$ to 10$</option>
            <option value="50">From 10$ to 50$</option>
            <option value="100">From 50$ to 100$</option>
          </select>
        </div>
      </div>
      <div className='list-inline' >
        {
          list?.map((item, index) => {
            return (
              <div
                key={item?.id}
                className='book'
              >
                <div
                  className="poster"
                  style={{backgroundImage: `url(${item?.image})`}}
                >

                </div>
                {/*<img src={item?.image} alt="корзина" />*/}
                <h2>{item?.title}</h2>
                <p><span className="bold">Book author:</span>{item?.author}</p>
                <div className="book-footer">
                  <span><span className="bold">Price:</span>{item?.price}</span>
                  <button
                    className="button"
                    onClick={() => onSelectBook(item)}
                  >
                    View
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}
