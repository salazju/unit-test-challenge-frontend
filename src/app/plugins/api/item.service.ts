import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Item } from 'src/app/core/interfaces/item';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private _itemsUrl = 'http://localhost:5000/items';

  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this._itemsUrl);
  }

  getItemById(id: string | null): Observable<Item> {
    return this.httpClient.get<Item>(`${this._itemsUrl}/${id}`);
  }

  createItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this._itemsUrl, item);
  }
}
