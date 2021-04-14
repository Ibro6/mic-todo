import { TaskService } from './../task.service';
import { TASK } from './../task';

import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.scss']
})
export class ListOfTasksComponent implements OnInit {
  
  @Output() onToggleInList = new EventEmitter();

  tasks: any = [];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    //@ts-ignore
    this.tasks = this.taskService.getAll();
  }

  public pushTask(e: any) {
    console.log(e)
    this.tasks.push(JSON.parse(e));
  }

  public clear() {
    this.tasks = [];
    localStorage.setItem('data', this.tasks);
  }

  public removeTask(e: any) {
    console.log(e);
    this.tasks = this.taskService.getAll();
  }
  // options
  public changeToggle(data: TASK) {
    console.log(data);
    this.onToggleInList.emit(data);
  }

  // add task
  public create(task: string) {
    if(!task) {
      return
    }
    // console.log(task);
    const newTask = {
      id: (new Date()).getTime(),
      toggle: false,
      task: task
    }
    
    this.taskService.create(newTask);
    this.tasks = this.taskService.getAll();
  }

  // task
  deleteTask(data: TASK) {
    console.log(data);
    this.taskService.delete(data);
    this.tasks = this.taskService.getAll();
  }
}
