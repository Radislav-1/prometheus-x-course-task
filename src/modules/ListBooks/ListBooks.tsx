import React, { useState, useContext } from 'react';

import SearchIcon from '@mui/icons-material/Search';

import './styles.scss';

import { MainContext } from "../../provider/ProviderMain";

export const ListBooks = () => {
  const { listBooks, currentBook, onSelectBook, onBasketBook } = useContext(MainContext);

  console.log('currentBook: ', currentBook);

  const [search, handleSearch] = useState('');

  const onSearch = (e) => {
    const value = e?.target?.value;

    handleSearch(value);
  }

  const list = !search ? listBooks?.books : listBooks?.books?.filter((item: any) => {
    return item?.title?.toLowerCase().includes(search.toLowerCase());
  });

  if (currentBook) {
    return (
      <main className="content book-wrapper">
        <button onClick={() => onSelectBook(null)}>
          Back
        </button>
        <img src={currentBook.image }
             alt={currentBook.title}/>
        <div className="book">
          <h2>{currentBook?.title}</h2>
          <p><span className="bold">Book author:</span>{currentBook?.author}</p>
          <p><span className="bold">Book level:</span>Beginner</p>
          <p><span className="bold">Book tags:</span>core</p>
        </div>
        <div className="prise">
          <div className="row"><span>Price:</span><span id="price">{currentBook?.price}</span></div>
          <div className="row">
            <label>Count</label>
            <input type="number" id="name" name="number"/>
          </div>
          <div>
            <div className="row"><span>Total price:</span><span id="price-total">52.72</span></div>
          </div>
          <button
            className="button"
            onClick={() => onBasketBook(currentBook)}
          >
            Add to cart
          </button>
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
          <select>
            <option value="1">From 0$ to 10$</option>
            <option value="2">From 10$ to 50$</option>
            <option value="3">From 50$ to 10$</option>
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
