import { Injectable } from '@angular/core';
import { map, of, switchMap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$ = this.api.get<any[]>('users');
  user$ = this.users$.pipe(
    switchMap( users => of(1).pipe(
       map(id => users[id])
    ))
  );
  constructor(
    private api: ApiService,
  ) { }
  addUser() {
    this.api.post('users', {
      name: 'New User',
      id: Math.floor(Math.random() * 100)
    }).subscribe(() => {
      this.users$.subscribe();
    });
  }
}
