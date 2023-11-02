import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline, CssVarsProvider, StyledEngineProvider } from '@mui/joy';
import { DashboardPage } from './pages';
import reportWebVitals from './reportWebVitals';
import '@fontsource/inter';
import './index.css';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <QueryClientProvider client={client}>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider defaultMode="dark">
          <DashboardPage />
        </CssVarsProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
