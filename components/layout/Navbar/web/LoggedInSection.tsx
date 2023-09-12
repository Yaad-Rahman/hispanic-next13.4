import { Button } from '@hispanic-ui';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { logoutUser } from '@/redux/slices/authSlice';
import type { UserType } from '@/types/authType';

export const LoggedInSection = ({ user }: { user: UserType }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="flex items-center gap-5">
      <img
        src={user.displayPhoto?.fileUrl}
        alt="profile"
        className="h-10 w-10 rounded-full object-cover"
      />
      <Button
        onClick={() => {
          router.push('/profile');
        }}
        variant="text"
        label={user.firstName}
        className="!font-bold text-white"
      />

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
