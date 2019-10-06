import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { NavComponent } from './nav/nav.component';
import { TaskEditComponent } from './task-edit/task-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskAddComponent,
    NavComponent,
    TaskEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
