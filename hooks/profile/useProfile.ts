import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  updateUserDetails,
  updateUserProfilePicture,
  uploadProfilePicture,
} from '@/api/authApi';
import {
  getCurrentUserSubscription,
  postSubscription,
} from '@/api/subscriptionApi';
import type { ProfileFormValues } from '@/components/forms/ProfileForm/types';
import { DEFAULT_ERROR_MESSAGE } from '@/constants';
import { FormatDateToTimestamp } from '@/libs/helpers/FormatDate';
import { setUser } from '@/redux/slices/authSlice';
import type { RootReducerState } from '@/redux/store';
import type { SubscriptionType } from '@/types/subscriptionType';

export const useProfile = () => {
  const currentUser = useSelector((state: RootReducerState) => state.auth.user);
  const token = getCookie('token') ?? '';
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [subscription, setSubscription] = useState<SubscriptionType | null>(
    null
  );

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

  // get current subscription of user
  const fetchSubscription = async () => {
    try {
      const response = await getCurrentUserSubscription(token);
      if (response.success) {
        setSubscription(response.payload);
      } else {
        console.log('fetch of subscription failed');
      }
    } catch (error: any) {
      console.error('Something gone wrong', error.message);
    }
  };

  // create subscription of current user
  const submitSubscription = async ({
    cardNumber,
    cardToken,
  }: {
    cardNumber: string;
    cardToken: string;
  }) => {
    const loading = toast.loading('loading...');
    const data = {
      cardNumber,
      endDate: Math.floor(
        new Date().setFullYear(new Date().getFullYear() + 1) / 1000
      ),
      paymentType: 'ONLINE',
      startDate: Math.floor(Date.now() / 1000),
      // subscriptionId: 0,
      tokenRequest: {
        currencyType: 'USD',
        token: cardToken,
      },
      userId: currentUser?.id,
    };

    try {
      const response = await postSubscription(token, data);
      if (response.success) {
        fetchSubscription();
        toast.update(loading, {
          render: 'Subscription Successful',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
        setOpenModal(false);
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
    }
  };

  // calling use effect
  useEffect(() => {
    fetchSubscription();
  }, []);

  return {
    openModal,
    setOpenModal,
    submitUpdateProfile,
    subscription,
    submitSubscription,
  };
};
