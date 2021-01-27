import { Item } from '../../models/item';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  title: string = '';
  price: number = 0;
  quantity: number = 0;
  @Output() addItem: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private itemService: ItemService) {}

  ngOnInit(): void {}

  onSubmit() {
    const item = new Item();
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    this.itemService.addItem(item).subscribe((i) => {
      this.router.navigate(['/']);
    });

    /* this.addItem.emit(item);
    this.router.navigate(['/']);  */
  }
}
