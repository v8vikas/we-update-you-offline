import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  feeds: any[] = [];
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  allFeeds: any;

  constructor() { }

  ngOnInit() {
    this.allFeeds = {
      read: [],
      unread: []
    };
  }

}
