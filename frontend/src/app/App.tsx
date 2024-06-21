import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'layout/Layout';
import { DeliveriesPage } from 'pages/DeliveriesPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ServiceInDevelopmentPage } from 'pages/ServiceInDevelopmentPage';
import { RouterPaths } from 'shared/routerPaths';

export const App = () => (
  <Routes>
    <Route path={RouterPaths.ROOT} element={<Layout />}>
      <Route index={true} element={<Navigate to={RouterPaths.DELIVERY} />} />
      <Route path={RouterPaths.DELIVERY} element={<DeliveriesPage />} />
      <Route path={RouterPaths.GOODS} element={<ServiceInDevelopmentPage />} />
      <Route path={RouterPaths.PRICES} element={<ServiceInDevelopmentPage />} />
      <Route
        path={RouterPaths.ANALITICS}
        element={<ServiceInDevelopmentPage />}
      />
      <Route
        path={RouterPaths.ADVERTISING}
        element={<ServiceInDevelopmentPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
