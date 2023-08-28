'use client';

import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getUserInfo } from '@/api/authApi';
import { setUser } from '@/redux/slices/authSlice';

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const token = getCookie('token') ?? null;

  useEffect(() => {
    (async () => {
      if (token) {
        const response = await getUserInfo(token);

        if (!response.success) {
          // dispatch(logoutUser());
        } else {
          dispatch(setUser({ user: response.payload.user }));
        }
      } else {
        // dispatch(logoutUser());
      }
      setLoading(false);
    })();
  }, []);

  return !loading && children;
};
