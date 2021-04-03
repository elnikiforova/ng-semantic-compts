import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html'
})
export class PlaceholderComponent implements OnInit {
  @Input() header = true;
  @Input() lines = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
