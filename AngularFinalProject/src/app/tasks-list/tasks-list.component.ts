import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[];

  getTasks(): void {
    this.taskDataService.getTasks().subscribe(t => (this.tasks = t));
  }

  deleteTask(id: number) : void {
    this.taskDataService.deleteTask(id).subscribe(p => this.getTasks());
  }
  constructor(private taskDataService: TaskDataService) { }

  ngOnInit() {
    this.getTasks();
  }

}
