import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from './../task.service'

@Component({
  selector: 'app-task-options',
  templateUrl: './task-options.component.html',
  styleUrls: ['./task-options.component.scss']
})
export class TaskOptionsComponent implements OnInit {

  @Input() dataOptions: any;
  note: any;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    console.log(this.dataOptions);
  }

  public addNote(note:string) {
    this.taskService.addNote(this.dataOptions.id, note);
    this.note = note;
    console.log(this.taskService.getAll());
  }

}