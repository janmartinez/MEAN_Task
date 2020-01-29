import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable} from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  private _httpService : HttpService;
  private _router : Router;
  public tasks: Array<any> = [];
  public unoTask: any = {};
  private description: boolean = false;

  constructor(_httpService : HttpService) {
    this._httpService = _httpService;

  }
  ngOnInit() {
  }

  allTasks() {
    let taskObservable : Observable<any> = this._httpService.getTasks();
    taskObservable.subscribe(res => {
      this.tasks = res;
      this.tasks.forEach(element => {
        element.isVisible = false;
      });
  });
}
oneTask(_id, i) {
  let oneObservable : Observable<any> = this._httpService.getOneTask(_id);
  oneObservable.subscribe(res => {
    console.log('Get 1 task!!!!', res);
    this.description = !this.description;
    this.unoTask = res;
    this.tasks.forEach(element => {
      element.isVisible = false;
    });
    this.tasks[i].isVisible = !this.tasks[i].isVisible;
});
}
deleteTask(_id) {
  let deleteObservable: Observable<any> = this._httpService.delete(_id);
  deleteObservable.subscribe(res => {
    this.unoTask = res;
    this.allTasks();

  });
}
  siCompleted(_id){
    this.unoTask.completed = true;
    console.log(this.unoTask);

    let siObservable : Observable<any> = this._httpService.siCompleted(_id, this.unoTask);
    siObservable.subscribe(res => {
      this.unoTask = res;
      this.allTasks();

    });
  }
}

