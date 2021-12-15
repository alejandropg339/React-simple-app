import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen.js';
import { DashboardRoutes } from './DashboardRoutes.js';
import { PrivateRoute } from './PrivateRoute.js';
import { PublicRoute } from './PublicRoute.js';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        }>
        </Route>

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route path="/*" element={<DashboardRoutes />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
