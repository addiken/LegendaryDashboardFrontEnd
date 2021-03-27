import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup = new FormGroup({
    "firstName": new FormControl('', Validators.required),
    "secondName": new FormControl(),
    "lastName": new FormControl('', Validators.required),
    "phone": new FormControl('', [
      Validators.required
    ]),
    "email": new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    "password": new FormControl('', Validators.required)
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigate(['/account'])
  }
}
