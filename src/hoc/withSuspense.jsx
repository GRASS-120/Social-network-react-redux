import React, { Suspense } from 'react';
import Preloader from '../components/Common/Preloader/Preloader';

export const withSuspense = (Component) => (props) => (
  <Suspense fallback={<Preloader />}>
    <Component {...props} />
  </Suspense>
);
