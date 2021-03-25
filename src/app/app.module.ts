import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertComponent } from './advert/advert.component';
import { AdvertMinComponent } from './advert-min/advert-min.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent}
  /*{ path: 'about', component: },*/
  /*{ path: '**', component:  }*/
];

@NgModule({
  declarations: [
    AppComponent,
    AdvertComponent,
    AdvertMinComponent,
    HeaderComponent,
    MainComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
