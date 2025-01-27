import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useLoading = (status: string): boolean => {
  const currentStatus = useAppSelector((state) => state.movies.status);
  return currentStatus === status;
};
