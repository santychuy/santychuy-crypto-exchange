import {
  TypedUseSelectorHook,
  useDispatch as useDefaultDispath,
  useSelector as useDefaultSelector,
} from 'react-redux';

import type { RootState, AppDispatch } from '../store';

export const useDispatch = () => useDefaultDispath<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useDefaultSelector;
