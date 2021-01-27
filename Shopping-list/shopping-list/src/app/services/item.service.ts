import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  url: string = 'http://localhost:3000/items';
  httpOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  items: Item[] = [
    {
      id: 0,
      title: 'manzana',
      price: 10.5,
      quantity: 4,
      completed: false,
    },

    {
      id: 1,
      title: 'pera',
      price: 8.5,
      quantity: 8,
      completed: true,
    },
  ];
  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
    // return this.items;
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url, item, this.httpOptions);
    //  this.items.unshift(item);
  }

  toggleItem(item: Item): Observable<Item> {
    // Se manda un objeto de tipo Item
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions);
  }

  deleteItem(item: Item): Observable<Item> {
    return this.http.delete<Item>(this.url + item.id);
  }

  toggleCompleted(item: Item): Observable<any> {
    return this.http.put(this.url + item.id, item, this.httpOptions);
  }
}
