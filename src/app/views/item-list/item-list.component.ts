import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {
  @Input() items = [];

  constructor() { }

  ngOnInit(): void {
  }

}
