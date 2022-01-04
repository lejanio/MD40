import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {AddUserQuery, User} from "../../shared/models/user.model";
import {UsersService} from "../../shared/services/users.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";

Observable;


enum UsersPageViewType {
  LIST,
  ADD,
  EDIT,
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit, OnDestroy {
  users?: User[];
  user?: User;
  mode: UsersPageViewType = UsersPageViewType.LIST;
  userPageViewType = UsersPageViewType;
  routeSubscription?: Subscription;

  constructor(private usersService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(paramMap => {
      const param = paramMap.get('param');
      if (param === 'new') {
        this.showAddNewUserForm();
      } else if (param) {
        this.showEditUserForm(param);
      } else {
        this.showUserList();
      }
    });
    this.users = this.usersService.getUsers();
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  addUser(query: AddUserQuery): void {
    this.users = this.usersService.addUser(query);
  }

  editUser(query: AddUserQuery, id?: string): void {
    if (id) {
      this.usersService.editUser(query, id);
    }
  }

  // deleteUser(index: number): void {
  //   this.usersService.deleteUser(index);
  // }

  showAddNewUserForm(): void {
    this.mode = UsersPageViewType.ADD;
  }

  showUserList(): void {
    this.mode = UsersPageViewType.LIST;
  }

  showEditUserForm(id: string): void {
    this.mode = UsersPageViewType.EDIT;
    this.user = this.usersService.getUser(id)
  }
}
