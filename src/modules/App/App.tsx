import React from "react";
import { Routes, Route } from "react-router";

import { ListBooks } from "../ListBooks/ListBooks";
import { Header } from "./components/Header";
import { SignIn } from "../Signin/Signin";
import { Book } from "../Book/Book";

import './styles.scss';
import {PageNotFound} from "../PageNotFound/PageNotFound";
import {Basket} from "../Basket/Basket";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/books" element={<ListBooks />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/basket" element={<Basket/>} />

      </Routes>
    </div>
  )
}
