import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router";

import { ListBooks } from "../ListBooks/ListBooks";
import { Header } from "./components/Header";
import { SignIn } from "../Signin/Signin";
import { Book } from "../Book/Book";

import './styles.scss';
import {PageNotFound} from "../PageNotFound/PageNotFound";
import {Basket} from "../Basket/Basket";
import {MainContext} from "../../provider/ProviderMain";

export const App = () => {
  const { token } = useContext(MainContext);

  if (token) {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ListBooks />} />
          {/*<Route path="/book" element={<Book />} />*/}
          <Route path="/basket" element={<Basket/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    )
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  )
}
