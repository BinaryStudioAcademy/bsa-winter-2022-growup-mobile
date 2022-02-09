import { useDispatch } from 'react-redux';

import { AppDispatch } from 'src/common/types/app';

export const useAppDispatch = () => useDispatch<AppDispatch>();
