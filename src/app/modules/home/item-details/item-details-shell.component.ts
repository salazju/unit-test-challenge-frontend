import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem, Item } from 'src/app/core/interfaces/item';
import { CartPageActions } from 'src/app/plugins/store/cart/actions';

import { selectSelectedItem, State } from 'src/app/plugins/store/home';
import { HomePageActions } from 'src/app/plugins/store/home/actions';

@Component({
  selector: 'app-item-details-shell',
  templateUrl: './item-details-shell.component.html',
})
export class ItemDetailsShellComponent implements OnInit {
  quantity = 1;
  item$: Observable<Item | null>;

  constructor(private store: Store<State>, private route: ActivatedRoute) {
    this.item$ = this.store.select(selectSelectedItem);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(HomePageActions.setSelectedItemId({ id }));
    this.store.dispatch(HomePageActions.getItemById({ id }));
  }

  updateQuantity(type: string) {
    type === 'increment' ? this.quantity++ : this.quantity--;
  }

  addItemToCart(item: Item): void {
    this.store.dispatch(
      CartPageActions.addItemToCart({
        cartItem: {
          id: item.id,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: this.quantity,
        } as CartItem,
      })
    );
    alert('Item added to cart!');
  }
}
