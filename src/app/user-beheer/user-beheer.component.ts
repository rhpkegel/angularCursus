import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../user.service";
import {User} from "../chat.models";
import {FormBuilder, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-beheer',
  templateUrl: './user-beheer.component.html',
  styleUrls: ['./user-beheer.component.scss']
})
export class UserBeheerComponent {
  users: Observable<User[]>;
  userForm = this.fb.group({
    voornaam: [''],
    achternaam: ['', Validators.required]
  })

  constructor(private userService: UserService, private fb: NonNullableFormBuilder) {
    this.users = this.userService.listActiveUsers()
  }

  submitUserForm() {
    if(this.userForm.valid && this.userForm.value.achternaam){
      this.userService.addUserToChat({
        voornaam: this.userForm.value.voornaam,
        achternaam: this.userForm.value.achternaam
      })
    }
  }
}
