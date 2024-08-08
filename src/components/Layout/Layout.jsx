import AppBar from '../AppBar/AppBar';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import style from './Layout.module.css';

function Layout() {
  return (
    <div className={style.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Layout;
