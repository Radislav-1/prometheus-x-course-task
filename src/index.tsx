import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
} from "react-router-dom";

import { App } from "./modules/App/App";

import { ProviderMain } from "./provider/ProviderMain";

render(
    <ProviderMain>
      <HashRouter>
        <App />
      </HashRouter>
    </ProviderMain>,
    document.getElementById('app'),
);
