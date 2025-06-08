/**
 * Main entry point for the React application.
 *
 * Boots the app by mounting the root component with necessary providers
 * and routers into the DOM.
 *
 * @module Main
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './providers/cart/CartContext.tsx';

/**
 * Initializes and renders the React component tree.
 *
 * Wraps <App /> in React.StrictMode, BrowserRouter, and CartProvider,
 * and attaches a Toaster for notifications.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
        <Toaster position="top-center" richColors />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
