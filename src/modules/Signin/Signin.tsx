import React, {useContext, useState}from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './styles.scss';
import {MainContext} from "../../provider/ProviderMain";

export const SignIn = () => {
  const { setToken } = useContext(MainContext);

  const [name, handleName] = useState('');

  return (
    <main className="content sign-in-wrapper">
      <div className="login-form">
        <h2>Username</h2>
        <TextField
          id="outlined-basic"
          label="type Username"
          variant="outlined"
          onChange={(e) => handleName(e?.target?.value)}
        />
        <Button
          onClick={ () => name ? setToken(name) : null}
          className="button"
          variant="contained"
        >
          Sign-IN
        </Button>
      </div>
    </main>
  )
};
