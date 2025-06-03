import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as AppState from '../app.state';
import { HomePageState } from './home.reducer';
import { CATEGORIES } from 'src/app/core/constants/item.constants';
import { Item, ItemsByCategory } from 'src/app/core/interfaces/item';

export interface State extends AppState.State {
  home: HomePageState;
}

const selectHomePageFeatureState = createFeatureSelector<HomePageState>('home');

export const selectAllItemsByOrder = createSelector(selectHomePageFeatureState, (homePageState) => {
  const items: Item[] = [...homePageState.items];
  items.sort((a, b) => {
    if (homePageState.isDesc) {
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    } else {
      return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
    }
  });
  return items;
});

export const selectItemsByCategory = createSelector(selectAllItemsByOrder, (items): ItemsByCategory => {
  const itemsByCategory: ItemsByCategory = {};
  Object.keys(CATEGORIES).forEach((category) => {
    itemsByCategory[category] = items.filter((item) => item.category.includes(category));
  });
  return itemsByCategory;
});

export const selectListBy = createSelector(selectHomePageFeatureState, (state) => state.listBy);

export const selectIsDesc = createSelector(selectHomePageFeatureState, (state) => state.isDesc);

export const selectSelectedItem = createSelector(
  selectHomePageFeatureState,
  (state) => state.items.find((item) => item.id === state.selectedItemId) || state.selectedItem
);
