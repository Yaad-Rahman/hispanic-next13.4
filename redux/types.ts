import type { UserType } from '@/types/authType';

export type AuthSliceInitialProps = {
  user: UserType | null;
  authenticated: boolean;
};
