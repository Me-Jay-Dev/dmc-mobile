import {STOCK_ERROR} from '../../utils/constants';
import {STOCK_COMPLETED} from '../../utils/constants';
import {STOCK_REQUEST} from '../../utils/constants';
import {
  DEVICE_MASTERLIST_COMPLETED,
  DEVICE_MASTERLIST_ERROR,
  DEVICE_MASTERLIST_REQUEST,
  SELECTED_ITEM_COMPLETED,
  SELECTED_ITEM_ERROR,
  SELECTED_ITEM_REQUEST,
} from '../../utils/constants';

const INITIAL_STATE = {
  isLoading: false,
  error_message: null,
  item_list: [
    {
      id: 1,
      subscription_id: 1,
      created_by: 2,
      unit_id: 1,
      brand_id: 1,
      productline_id: 1,
      code: '1681716581',
      name: 'Hotdog',
      description: null,
      print_description: 'HTDOG',
      search_code: 'HTDOG',
      standard_cost: '1300.00',
      net_weight: '500G',
      factor: 'sample factor1',
      status: '1',
      slug: '1681716581-hotdog',
      deleted_at: null,
      created_at: '2023-04-17T07:29:41.000000Z',
      updated_at: '2023-04-17T07:29:41.000000Z',
    },
    {
      id: 2,
      subscription_id: 1,
      created_by: 2,
      unit_id: 1,
      brand_id: 1,
      productline_id: 1,
      code: '1681716581',
      name: 'Hotdogs',
      description: null,
      print_description: 'HTDOGs',
      search_code: 'HTDOGs',
      standard_cost: '1300.00',
      net_weight: '500G',
      factor: 'sample factor1s',
      status: '1',
      slug: '1681716581-hotdogs',
      deleted_at: null,
      created_at: '2023-04-17T07:29:41.000000Z',
      updated_at: '2023-05-17T07:29:41.000000Z',
    },
  ],
  selectedStock: [],
};

export default reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEVICE_MASTERLIST_REQUEST:
      return {...state, isLoading: true};
    case DEVICE_MASTERLIST_ERROR:
      return {...state, isLoading: false};
    case DEVICE_MASTERLIST_COMPLETED:
      return {
        ...state,
        item_list: action.payload,
        isLoading: false,
      };

    case SELECTED_ITEM_REQUEST:
      return {...state, isLoading: true};
    case SELECTED_ITEM_ERROR:
      return {...state, isLoading: false};
    case SELECTED_ITEM_COMPLETED:
      return {...state, isLoading: false, selectedStock: action.payload};

    case STOCK_REQUEST:
      return {...state, isLoading: true};
    case STOCK_ERROR:
      return {...state, isLoading: false};
    case STOCK_COMPLETED:
      return {...state, isLoading: false, selectedStock: action.payload};
    default:
      return state;
  }
};
