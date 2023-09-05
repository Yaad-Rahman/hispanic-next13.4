import { setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { postSignIn, postSignup } from '@/api/authApi';
import type { LoginValues } from '@/components/forms/LoginForm/types';
import type { SignupValues } from '@/components/forms/SignupForm/types';
import { DEFAULT_ERROR_MESSAGE } from '@/constants';
import { setUser } from '@/redux/slices/authSlice';

export const useSignupLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') ?? null;

  // sign up logic

  const submitSignup = async (
    values: SignupValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => {
    const loading = toast.loading('Signing up...');
    setSubmitting(true);

    try {
      const response = await postSignup(values);
      if (response.success) {
        resetForm();
        router.push('/');
        toast.update(loading, {
          render:
            'Registration successful. Please check your mail for validation',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      } else {
        toast.update(loading, {
          render: DEFAULT_ERROR_MESSAGE,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      }
    } catch (error: any) {
      toast.update(loading, {
        render: error.message ?? DEFAULT_ERROR_MESSAGE,
        type: 'error',
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  // login logic

  const submitLogin = async (
    values: LoginValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => {
    const loading = toast.loading('Logging...');
    setSubmitting(true);

    try {
      const response = await postSignIn(values);
      if (response.success) {
        if (response.payload.user.verified) {
          resetForm();
          router.push(redirectUrl ?? '/');
          toast.update(loading, {
            render: `Welcome back ${response.payload.user.firstName}`,
            type: 'success',
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
          dispatch(setUser(response.payload));
          setCookie('token', response.payload.accessToken);
        } else {
          toast.update(loading, {
            render: 'Your email is not verified yet',
            type: 'error',
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
        }
      } else {
        toast.update(loading, {
          render: 'Wrong credentials',
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      }
    } catch (error: any) {
      toast.update(loading, {
        render: error.message ?? DEFAULT_ERROR_MESSAGE,
        type: 'error',
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return { submitLogin, submitSignup };
};
