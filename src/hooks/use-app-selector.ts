import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from 'src/common/types/app';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
