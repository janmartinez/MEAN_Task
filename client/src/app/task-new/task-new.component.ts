import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  private _httpService : HttpService;
  private _router : Router;

  public newTask: any = {};
  public errors: any = {};


  constructor(_httpService : HttpService, router: Router) {
    this._httpService = _httpService;
    this._router = router;
  }
  addTask() {
    console.log('New task!!');
    let observable: Observable<any> = this._httpService.create(this.newTask);
    observable.subscribe(res => {
      if (res.errors) {
        console.log(res.errors);
        this.errors = res.errors; }
      else {
        this._router.navigate(['/']);      }
    });
  }


  ngOnInit() {
  }

}
