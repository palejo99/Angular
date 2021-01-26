import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  // Variable items de tipo Item, q por def es un obj, y se declara vacío inicialment
  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
    //this.items = [];

    /* {
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
      }, */

    this.getTotal();
  }

  deleteItem(item: Item) {
    this.items = this.items.filter((x) => x.id != item.id);
    this.getTotal();
  }

  toggleItem(item: Item) {
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
      .filter((item) => !item.completed)
      .map((item) => item.quantity * item.price)
      // Inicializada en 0
      .reduce((acc, item) => (acc += item), 0);
  }
}
