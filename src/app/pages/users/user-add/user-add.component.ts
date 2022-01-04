import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {AddUserQuery} from "../../../shared/models/user.model";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  @Output() addUserEvent = new EventEmitter<AddUserQuery>();

  showCountrySelect = false;
  addUserForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: [''],
      country: ['']
    })
  }

  addUser(): void {
    this.addUserEvent.emit(this.addUserForm.value)
  }
}
