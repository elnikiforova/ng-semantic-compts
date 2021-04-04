import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html'
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: 'Number of Users' },
    { value: 900, label: 'Revenue' },
    { value: 59, label: 'Reviews' }
  ];

  items = [
    { image: '/assets/images/couch.png', title: 'Couch', description: 'This is a fanstastic couch lorem ipsum!' },
    { image: '/assets/images/dresser.png', title: 'Dresser', description: 'No dolor in this dresser sit amet!' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
