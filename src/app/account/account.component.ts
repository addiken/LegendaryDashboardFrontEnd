import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  items: any[] = [1,2,3,4,5]

  constructor() { }

  ngOnInit(): void {
  }

}
