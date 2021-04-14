import { TASK } from './task';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { database } from './database';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    
  ) { }

  private database: TASK[] = [];

  public getAll(): TASK[] {
    if(!localStorage.getItem('data')) {
      return [];
    } else {
      // @ts-ignore
      return JSON.parse(localStorage.getItem('data'));
    }
  }
  
  // CREATE
  public create(task: TASK): TASK {
    let tasks: TASK[] = this.getAll();
    if (!tasks) {
      tasks = [];
    }
    tasks.push(task);
    localStorage.setItem('data', JSON.stringify(tasks));
    return task;
  }

  // DELETE
  public delete(data: TASK) {
    let tasks: TASK[] = this.getAll();
    if (!tasks) {
      tasks = [];
    }

    tasks.map((elem: TASK) => {
      if(elem.id === data.id) {
        console.log(elem);
        tasks.splice(tasks.indexOf(elem), 1);
      }
    });

    localStorage.setItem('data', JSON.stringify(tasks));
    // tasks = this.getAll();
  }
  
  public removeAll(task: TASK): TASK {
    let tasks: TASK[] = this.getAll();
    if (!tasks) {
      tasks = [];
    }

    //tasks.push(task);
    localStorage.removeItem('data');
    return task;
  }

  public addNote(id: number, note: string) {
    let tasks: TASK[] = this.getAll();
    
    tasks.forEach((task) => {
      if(id === task.id) {
        task.note = note;
      }
    })

    localStorage.setItem('data', JSON.stringify(tasks));
  }
}
