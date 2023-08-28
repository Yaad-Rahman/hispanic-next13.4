'use client';

import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { store } from './store';

export const ProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Provider store={store}>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Provider>
  );
};
