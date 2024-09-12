import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainHome } from './pages/MainHome';
import { HomeArcs } from './pages/HomeArcs';
import { Services } from './pages/Services';
import { useTranslation } from 'react-i18next';
import { navBarInfos } from './utils/data';
import { Rates } from './pages/Rates';
import { Contact } from './pages/Contact';
import { Boutikchic } from './pages/Boutikchic';

function Router(): JSX.Element {
  const { t } = useTranslation();
  const ownerServicesMenu = navBarInfos(t).find(item => item.title === t('ownerServices'));
  const tenantServicesMenu = navBarInfos(t).find(item => item.title === t('tenantServices'));
  
  return (
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/lesarcs" element={<HomeArcs />} />
      <Route path="/services_proprietaires" element={<Services infos={ownerServicesMenu} id={t('ownerServices')} />} />
      <Route path="/services_locataires" element={<Services infos={tenantServicesMenu} id={t('tenantServices')} />} />
      <Route path="/tarifs" element={<Rates />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/laboutikchic" element={<Boutikchic />} />
    </Routes>
  );
}

export { Router };