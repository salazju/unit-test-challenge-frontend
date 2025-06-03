import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/core/interfaces/item';

export const getAllItemsSuccess = createAction('[Home API] Get All Items Success', props<{ items: Item[] }>());

export const getAllItemsFailed = createAction('[Home API] Get All Items Failed', props<{ error: string }>());

export const getItemByIdSuccess = createAction('[Home API] Get Item By Id Success', props<{ item: Item }>());

export const getItemByIdFailed = createAction('[Home API] Get Item By Id Failed', props<{ error: string }>());

export const createItemSuccess = createAction('[Home API] Create Item Success', props<{ item: Item }>());

export const createItemFailed = createAction('[Home API] Create Item Failed', props<{ error: string }>());
