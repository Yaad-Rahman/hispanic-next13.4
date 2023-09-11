import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  updateUserDetails,
  updateUserProfilePicture,
  uploadProfilePicture,
} from '@/api/authApi';
import type { ProfileFormValues } from '@/components/forms/ProfileForm/types';
import { DEFAULT_ERROR_MESSAGE } from '@/constants';
import { FormatDateToTimestamp } from '@/libs/helpers/FormatDate';
import { setUser } from '@/redux/slices/authSlice';

export const useProfile = () => {
  const token = getCookie('token') ?? '';
  const dispatch = useDispatch();
  const submitUpdateProfile = async (
    values: ProfileFormValues,
    {
      setSubmitting,
    }: {
      setSubmitting: (status: boolean) => void;
    }
  ) => {
    const loading = toast.loading('updating...');
    setSubmitting(true);

    // handle the image upload
    if (!values.image.fileUrl) {
      try {
        const formData = new FormData();
        formData.append('file', values.image);
        formData.append('fileType', values.image?.mimeType);
        formData.append('fileUploadType', 'USER_IMAGE');
        const imageResponse = await uploadProfilePicture(token, formData);
        // updating profile picture
        if (imageResponse.success) {
          try {
            await updateUserProfilePicture(token, imageResponse.payload.id);
            toast.update(loading, {
              render: 'Profile picture updated',
              type: 'success',
              isLoading: false,
              autoClose: 3000,
              closeOnClick: true,
            });
          } catch (error: any) {
            toast.update(loading, {
              render: error.message || DEFAULT_ERROR_MESSAGE,
              type: 'error',
              isLoading: false,
              autoClose: 3000,
              closeOnClick: true,
            });
          }
        }
      } catch (error: any) {
        toast.update(loading, {
          render: error.message || DEFAULT_ERROR_MESSAGE,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      }
    }

    const data = {
      ...values,
      dateOfBirth: FormatDateToTimestamp(String(values.dateOfBirth)),
      dateOfAppointment: FormatDateToTimestamp(
        String(values.dateOfAppointment)
      ),
      lastPromotionDate: FormatDateToTimestamp(
        String(values.lastPromotionDate)
      ),
    };
    delete data.image;

    try {
      const response = await updateUserDetails(token, data);
      if (response.success) {
        toast.update(loading, {
          render: 'User details updated',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
        dispatch(setUser({ user: response.payload.user }));
      } else {
        toast.update(loading, {
          render: response.message || DEFAULT_ERROR_MESSAGE,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      }
    } catch (error: any) {
      toast.update(loading, {
        render: error.message || DEFAULT_ERROR_MESSAGE,
        type: 'error',
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return { submitUpdateProfile };
};
