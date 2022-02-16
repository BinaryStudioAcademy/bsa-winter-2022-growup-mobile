import { createAsyncThunk } from '@reduxjs/toolkit';

import { notificationApi } from 'src/services';
import { ActionTypes } from './common';

const markNotificationRead = createAsyncThunk(
  ActionTypes.MARK_NOTIFICATION_READ,
  async (payload: string) => {
    await notificationApi.markRead(payload);
  }
);

export { markNotificationRead };
