import { Component, OnInit, getDebugNode } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public newTask: any = {isComplete: false};


}
