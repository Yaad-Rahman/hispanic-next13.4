import type { ProfileFormValues } from '@/components/forms/ProfileForm/types';
import type { GetUserInfoType } from '@/types/authType';

import { FormatDateToInputValue } from '../helpers/FormatDate';

export const FormatToProfileFormIntialValues = (
  userObject: GetUserInfoType
): ProfileFormValues => {
  return {
    image: userObject.user.displayPhoto,
    firstName: userObject.user.firstName,
    middleName: userObject.user.middleName,
    lastName: userObject.user.lastName,
    email: userObject.user.email,
    phone: userObject.userDetails.phone,
    rank: userObject.userDetails.rank,
    sheild: userObject.userDetails.shield,
    essNumber: userObject.userDetails.essNumber,
    dateOfBirth: userObject.userDetails.dateOfBirth
      ? FormatDateToInputValue(String(userObject.userDetails.dateOfBirth))
      : '',
    commandCode: userObject.userDetails.cmdCode,
    commandName: userObject.userDetails.cmdCodeDescription,
    borough: userObject.userDetails.borough,
    dateOfAppointment: userObject.userDetails.appointedDate
      ? FormatDateToInputValue(String(userObject.userDetails.appointedDate))
      : '',
    lastPromotionDate: userObject.userDetails.lastPromotionDate
      ? FormatDateToInputValue(String(userObject.userDetails.lastPromotionDate))
      : '',
    activeStatus: userObject.userDetails.activeOrRetired,
  };
};
