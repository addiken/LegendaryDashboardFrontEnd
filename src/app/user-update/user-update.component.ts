import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['../login/login.component.css']
})
export class UserUpdateComponent implements OnInit {
  userUpdateForm: FormGroup = new FormGroup({
    "firstName": new FormControl(),
    "secondName": new FormControl(),
    "lastName": new FormControl(),
    "phone": new FormControl(),
    "email": new FormControl()
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigate(['/account'])
  }
}
