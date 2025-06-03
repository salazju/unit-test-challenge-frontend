import { createReducer, on } from '@ngrx/store';
import { Item } from 'src/app/core/interfaces/item';
import { HomeApiActions, HomePageActions } from './actions';

export interface HomePageState {
  error: string;
  isDesc: boolean;
  items: Item[];
  listBy: string;
  selectedItemId: number | null;
  selectedItem: Item | null;
}

const initialState: HomePageState = {
  error: '',
  isDesc: true,
  items: [],
  listBy: 'dateAdded',
  selectedItemId: null,
  selectedItem: null,
};

export const homePageReducer = createReducer(
  initialState,
  on(HomeApiActions.getAllItemsSuccess, (state, action): HomePageState => {
    return {
      ...state,
      items: [...action.items],
    };
  }),
  on(HomeApiActions.getAllItemsFailed, (state, action): HomePageState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(HomeApiActions.getItemByIdSuccess, (state, action): HomePageState => {
    return {
      ...state,
      selectedItem: action.item,
    };
  }),
  on(HomeApiActions.getItemByIdFailed, (state, action): HomePageState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(HomeApiActions.createItemSuccess, (state, action): HomePageState => {
    return {
      ...state,
      items: [...state.items, action.item],
    };
  }),
  on(HomeApiActions.createItemFailed, (state, action): HomePageState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(HomePageActions.changeListBy, (state, action): HomePageState => {
    return {
      ...state,
      listBy: action.listBy,
    };
  }),
  on(HomePageActions.toggleOrder, (state): HomePageState => {
    return {
      ...state,
      isDesc: !state.isDesc,
    };
  }),
  on(HomePageActions.setSelectedItemId, (state, actions): HomePageState => {
    return {
      ...state,
      selectedItemId: Number(actions.id),
    };
  })
);
