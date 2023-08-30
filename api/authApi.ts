import type { LoginValues } from '@/components/forms/LoginForm/types';
import type { SignupValues } from '@/components/forms/SignupForm/types';
import type { SignInPayloadType, UserType } from '@/types/authType';
import ApiFetch from '@/utils/ApiFetch';

async function postSignup(body: SignupValues) {
  const response = await ApiFetch<null, 'single'>({
    url: 'auth/signup',
    method: 'POST',
    body,
  });

  return response;
}

async function postSignIn(body: LoginValues) {
  const response = await ApiFetch<SignInPayloadType, 'single'>({
    url: 'auth/signin',
    method: 'POST',
    body,
  });

  return response;
}

async function getUserInfo(authToken: string) {
  const response = await ApiFetch<{ user: UserType }, 'single'>({
    url: 'auth/me',
    method: 'GET',
    authToken,
  });

  return response;
}

export { getUserInfo, postSignIn, postSignup };
