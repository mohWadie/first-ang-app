import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model';
import { TasksServices } from '../tasks.services';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksServices = inject(TasksServices);

  onCompleteTask() {
    this.tasksServices.removeTask(this.task.id);
  }
}
