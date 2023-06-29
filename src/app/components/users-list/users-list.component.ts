import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users$ = this.usersService.users$;
  user$ = this.usersService.user$;
  constructor(
    private usersService: UsersService,
  ) { }


  ngOnInit(): void {
  }

  addUser() {
    this.usersService.addUser();
  }

}
