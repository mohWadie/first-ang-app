import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
// import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'first-ang-app';

  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((u) => u.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    // console.log('Selected user with id: ' + id);
    this.selectedUserId = id;
  }
}
