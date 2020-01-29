import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: TaskListComponent},
  {path: 'new', component: TaskNewComponent},
  {path: 'edit/:_id',  component: TaskEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
