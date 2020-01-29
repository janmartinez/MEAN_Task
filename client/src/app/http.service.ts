import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _http : HttpClient;

  constructor(_http : HttpClient) {
    this._http = _http;

   }

   getTasks(): Observable<any> {
     return this._http.get('/tasks');
   }
   getOneTask(_id): Observable<any> {
     return this._http.get(`tasks/${_id}`);
   }
   create(task: object): Observable<any> {
    return this._http.post('/tasks', task);

   }
   updateTask(_id, taskData) {
    return this._http.put(`/tasks/${_id}`, taskData);
  }
  delete(_id) {
    return this._http.delete(`/tasks/${_id}`);
  }
  siCompleted(_id, completado) {
    console.log(completado);
    return this._http.put(`/tasks/${_id}`, completado);
  }
}
