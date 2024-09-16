// src/components/RouteWrapper.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderFooter from './Header-Footer';
import { Outlet } from 'react-router-dom';

function RouteWrapper() {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== '/resume';

  return (
    <div>
      {showHeaderFooter && <HeaderFooter />}
      <Outlet />
      {showHeaderFooter && <HeaderFooter />}
    </div>
  );
}

export default RouteWrapper;
