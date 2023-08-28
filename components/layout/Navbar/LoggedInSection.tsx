import { Button, Typography } from '@hispanic-ui';
import { useDispatch } from 'react-redux';

import { logoutUser } from '@/redux/slices/authSlice';
import type { UserType } from '@/types/authType';

export const LoggedInSection = ({ user }: { user: UserType }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-5">
      <img
        src={user.displayPhoto?.fileUrl}
        alt="profile"
        className="h-12 w-12 rounded-full object-cover"
      />
      <Typography variant="white" weight="semibold">
        {user.firstName}
      </Typography>
      <Button
        onClick={() => {
          dispatch(logoutUser());
        }}
        variant="text"
        label="Logout"
        className="!font-bold text-white"
      />
    </div>
  );
};
