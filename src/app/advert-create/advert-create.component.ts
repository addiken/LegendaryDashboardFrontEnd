import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-advert-create',
  templateUrl: './advert-create.component.html',
  styleUrls: ['../login/login.component.css']
})
export class AdvertCreateComponent implements OnInit {

  advertForm: FormGroup = new FormGroup({
    "category": new FormControl('',[
      Validators.required
    ]),
    "name": new FormControl('', [
      Validators.required
    ]),
    "desc": new FormControl(),
    "price": new FormControl('', [
      Validators.required
    ]),
    "state": new FormControl('', [
      Validators.required
    ]),
    "city": new FormControl('', [
      Validators.required
    ]),
    "street": new FormControl(),
    "house": new FormControl()
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['/account'])
  }
}
