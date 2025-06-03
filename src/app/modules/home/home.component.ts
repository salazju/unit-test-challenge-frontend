import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { Item, ItemsByCategory } from 'src/app/core/interfaces/item';
import {
  selectAllItemsByOrder,
  selectIsDesc,
  selectItemsByCategory,
  selectListBy,
  State,
} from 'src/app/plugins/store/home';
import { HomePageActions } from 'src/app/plugins/store/home/actions';
import { CATEGORIES } from 'src/app/core/constants/item.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  ascIcon = faArrowUp;
  descIcon = faArrowDown;
  categories = Object.keys(CATEGORIES).sort();
  items$: Observable<Item[]>;
  listBy$: Observable<string>;
  itemsByCategory$: Observable<ItemsByCategory>;
  isDesc$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.items$ = this.store.select(selectAllItemsByOrder);
    this.listBy$ = this.store.select(selectListBy);
    this.itemsByCategory$ = this.store.select(selectItemsByCategory);
    this.isDesc$ = this.store.select(selectIsDesc);
  }

  ngOnInit(): void {
    this.store.dispatch(HomePageActions.getAllItems());
  }

  changeListBy(value: string): void {
    this.store.dispatch(HomePageActions.changeListBy({ listBy: value }));
  }

  toggleOrder(): void {
    this.store.dispatch(HomePageActions.toggleOrder());
  }
}
