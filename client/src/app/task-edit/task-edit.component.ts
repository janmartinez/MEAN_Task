import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  private _httpService: HttpService;
  private _route: ActivatedRoute;
  private _router: Router;
  public error2s: any = {};
  public oneTask: any = {};

  constructor(httpService: HttpService, route: ActivatedRoute, router: Router) {
    this._httpService = httpService;
    this._route = route;
    this._router = router;
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['_id']);
      const taskObservable: Observable<any> = this._httpService.getOneTask(params['_id']);
      taskObservable.subscribe( res => this.oneTask = res );
    });
  }

  editTask(_id) {
    let observable = this._httpService.updateTask(_id, this.oneTask);
    observable.subscribe( res => {
      console.log("Estoy en edit tast");
      console.log(res);
      if (res['errors']) {
        this.error2s = res['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }

}
