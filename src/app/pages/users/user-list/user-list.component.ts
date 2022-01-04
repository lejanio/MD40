import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {User} from "../../../shared/models/user.model";
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {UsersService} from "../../../shared/services/users.service";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input()
  users?: User[];

  faEdit = faEdit;
  faTrash = faTrashAlt

  tableHeadTitles = [
    'ID',
    'Vārds',
    'Uzvārds',
    'Valsts kods',
    'Labot',
    'Dzēst',
  ]

  constructor(private usersService: UsersService, private cd: ChangeDetectorRef) {
  }

  deleteUser(index: number): void {
    this.usersService.deleteUser(index);
  }

}
