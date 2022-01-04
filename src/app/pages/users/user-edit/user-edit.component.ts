import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AddUserQuery, User} from "../../../shared/models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @Input()
  user?: User;

  @Output()
  editUserEvent = new EventEmitter<AddUserQuery>();

  editUserForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm()
    this.patchForm();
  }

  buildForm(): void {
    this.editUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: [''],
      country: ['']
    })
  }

  patchForm(): void {
    this.editUserForm.patchValue({
      name: this.user?.name,
      surname: this.user?.surname,
      country: this.user?.country,
    })
  }

  editUser(): void {
    this.editUserEvent.emit(this.editUserForm.value);
  }
}
