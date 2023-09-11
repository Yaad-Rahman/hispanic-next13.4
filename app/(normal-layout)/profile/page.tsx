import { cookies } from 'next/headers';

import { getUserInfo } from '@/api/authApi';
import { getAllRanksAndBoroughs } from '@/api/ranksApi';
import { ProfilePage } from '@/components/page/ProfilePage';

export default async function Profile() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value ?? '';
  const [boroughsData, ranksData, userData] = await Promise.all([
    getAllRanksAndBoroughs({
      rankType: 'BOROUGH',
      pageSize: 100,
    }),
    getAllRanksAndBoroughs({
      rankType: 'RANK',
      pageSize: 100,
    }),
    getUserInfo(token),
  ]);

  return (
    <ProfilePage
      boroughs={boroughsData.payload.content}
      ranks={ranksData.payload.content}
      userObject={userData.payload}
    />
  );
}
