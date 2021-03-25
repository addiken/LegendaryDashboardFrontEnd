import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    "category": new FormControl(),
    "searchRequest": new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    alert(this.searchForm);
  }
}
