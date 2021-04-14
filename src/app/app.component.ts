import { Component, VERSION, OnInit } from '@angular/core';

import {TASK} from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  dataApp: any;
  //@ts-ignore
  toggle: boolean;

  constructor(

  ) {

  }

  ngOnInit() {
  }

  onToggle(e: TASK) {
    // change toggle parametr inside task object
    e.toggle = !e.toggle;
    // and assidg to toggle variable in app component to show an hide task-options
    this.toggle = e.toggle;
    // assign ...
    this.dataApp = e;
  }
}
