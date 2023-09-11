import type { LoginValues } from '@/components/forms/LoginForm/types';
import type { ProfileFormValues } from '@/components/forms/ProfileForm/types';
import type { SignupValues } from '@/components/forms/SignupForm/types';
import type {
  FileUploadResponse,
  GetUserInfoType,
  SignInPayloadType,
} from '@/types/authType';
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
  const response = await ApiFetch<GetUserInfoType, 'single'>({
    url: 'auth/me',
    method: 'GET',
    authToken,
  });

  return response;
}

// uploading the file first and then change the profile pic

async function uploadProfilePicture(authToken: string, body: any) {
  const response = await ApiFetch<FileUploadResponse, 'single'>({
    url: 'file/upload',
    method: 'POST',
    body,
    authToken,
    isFormData: true,
  });

  return response;
}

async function updateUserProfilePicture(authToken: string, dbfileId: number) {
  const response = await ApiFetch<any, 'single'>({
    url: 'auth/profile-picture/update',
    method: 'PUT',
    body: {
      dbfileId,
    },
    authToken,
  });

  return response;
}

async function updateUserDetails(authToken: string, values: ProfileFormValues) {
  const response = await ApiFetch<GetUserInfoType, 'single'>({
    url: 'auth/profile/update',
    method: 'PUT',
    body: values,
    authToken,
  });

  return response;
}

export {
  getUserInfo,
  postSignIn,
  postSignup,
  updateUserDetails,
  updateUserProfilePicture,
  uploadProfilePicture,
};
