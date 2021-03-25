import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: string[] = [
    'Личные вещи', 'Для дома и дачи', 'Хобби и отдых',
    'Бытовая электроника', 'Транспорт', 'Недвижимость', 'Работа',
    'Услуги', 'Готовый бизнес и оборудование', 'Животные'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
