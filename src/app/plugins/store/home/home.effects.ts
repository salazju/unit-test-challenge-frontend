import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';

import { ItemService } from '../../api/item.service';
import { HomeApiActions, HomePageActions } from './actions';

@Injectable()
export class HomeEffects {
  constructor(private actions$: Actions, private itemService: ItemService) {}

  getAllItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomePageActions.getAllItems),
      mergeMap(() =>
        this.itemService.getItems().pipe(
          map((items) => HomeApiActions.getAllItemsSuccess({ items })),
          catchError((error) => of(HomeApiActions.getAllItemsFailed({ error })))
        )
      )
    )
  );

  getItemById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomePageActions.getItemById),
      concatMap((action) =>
        this.itemService.getItemById(action.id).pipe(
          map((item) => HomeApiActions.getItemByIdSuccess({ item })),
          catchError((error) => of(HomeApiActions.getItemByIdFailed({ error })))
        )
      )
    )
  );

  createItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomePageActions.createItem),
      concatMap((action) =>
        this.itemService.createItem(action.item).pipe(
          map((item) => HomeApiActions.createItemSuccess({ item })),
          catchError((error) => of(HomeApiActions.createItemFailed({ error })))
        )
      )
    )
  );
}
