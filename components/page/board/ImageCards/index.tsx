import { Typography } from '@hispanic-ui';

import { BoardMembers } from '@/constants/testData';

export const ImageCards = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-4">
      {BoardMembers.executive.map((member, index) => (
        <div key={index} className="relative h-[352px]">
          <img
            src={member.profilePhoto}
            alt="profile"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute bottom-0 w-full px-5 py-6"
            style={{
              background: 'rgba(5, 12, 31, 0.80)',
            }}
          >
            <Typography variant="white" size="large" weight="semibold" lexend>
              {member.name}
            </Typography>
            <Typography
              className="mt-3"
              variant="white"
              size="small"
              weight="medium"
              lexend
            >
              {member.designation}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};
