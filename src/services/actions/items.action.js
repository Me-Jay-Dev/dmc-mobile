import {
  DEVICE_MASTERLIST,
  DEVICE_MASTERLIST_COMPLETED,
} from '../../utils/constants';

export const getAllItems = payload => ({
  type: DEVICE_MASTERLIST,
  payload,
});

export const getAllItemsCompleted = () => ({
  type: DEVICE_MASTERLIST_COMPLETED,
});
