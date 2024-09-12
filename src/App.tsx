import './styles/index.css';
import './i18n';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Layout } from './pages/Layout';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuContext } from './utils/context';

function App() {
  const { t } = useTranslation();

  // Contexte menu actif
  const [activeMenu, setActiveMenu] = useState<string>('');

  const menuContextValue = {
    activeMenu,
    updateActiveMenu: setActiveMenu,
  };

  return (
    <BrowserRouter>
      <MenuContext.Provider value={menuContextValue}>
        <Layout>
          <Router/>
        </Layout>
      </MenuContext.Provider>
    </BrowserRouter>
  );
}

export default App;
