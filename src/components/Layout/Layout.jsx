import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from 'components/AppBar/AppBar';

import { Container } from './Layout.style';

export const Layout = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
