import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html'
})
export class StatisticsComponent implements OnInit {
  @Input() data = [];

  constructor() { }

  ngOnInit(): void {
  }

}
