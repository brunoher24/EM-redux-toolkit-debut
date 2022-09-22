import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectUserInfos } from '../features/auth/authSlice';

export const useAuth = () => {
  const userInfos = useSelector(selectUserInfos);
  return useMemo(() => ({ userInfos }), [userInfos]);
}
