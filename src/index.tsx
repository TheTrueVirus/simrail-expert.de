import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const SimRailExpert_Application_SRTO = lazy(() => import('./applications/srto/main'));
const SimRailExpert_PrivacyPolicy = lazy(() => import('./privacyPolicy/privacy-policy'));

// const SimRailExpert_LandingPage = lazy(() => import('./landingpage/landingpage'));
// const SimRailExpert_ElectronicTimetable = lazy(() => import('./applications/ebula/main'));
// const SimRailExpert_TestDevApplication = lazy(() => import('./applications/test/main'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          {/* <Route path='/' element={<SimRailExpert_LandingPage />} /> */}
          <Route path='/' element={<Navigate to={'/projects/srto'} replace />} />
          <Route path='/projects/srto' element={<SimRailExpert_Application_SRTO />} />
          <Route path='/privacy-policy/' element={<SimRailExpert_PrivacyPolicy />} />
          {/* <Route path='/projects/ebula' element={<SimRailExpert_ElectronicTimetable />} /> */}
          {/* <Route path='/test' element={<SimRailExpert_TestDevApplication />} /> */}

        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);