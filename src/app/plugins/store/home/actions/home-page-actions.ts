import { createAction, props } from '@ngrx/store';

import { Item } from 'src/app/core/interfaces/item';

export const getAllItems = createAction('[Home Page] Get All Items');

export const getItemById = createAction('[Home Page] Get Item By Id', props<{ id: string | null }>());

export const changeListBy = createAction('[Home Page] Change List By', props<{ listBy: string }>());

export const toggleOrder = createAction('[Home Page] Toggle Order');

export const setSelectedItemId = createAction('[Home Page] Set Selected Item Id', props<{ id: string | null }>());

export const createItem = createAction('[Home Page] Create Item', props<{ item: Item }>());
