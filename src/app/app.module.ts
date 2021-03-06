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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { AdvertCreateComponent } from './advert-create/advert-create.component';
import { AdvertUpdateComponent } from './advert-update/advert-update.component';
import { AdvertOwnerComponent } from './advert-owner/advert-owner.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { AdvertOpenedComponent } from './advert-opened/advert-opened.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'account', component: AccountComponent},
  { path: 'advert', component: AdvertOpenedComponent},
  { path: 'advert-create', component: AdvertCreateComponent},
  { path: 'advert-update', component: AdvertUpdateComponent},
  { path: 'user-update', component: UserUpdateComponent}
  /*{ path: '**', component:  }*/
];

@NgModule({
  declarations: [
    AppComponent,
    AdvertComponent,
    AdvertMinComponent,
    HeaderComponent,
    MainComponent,
    CategoriesComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    AdvertCreateComponent,
    AdvertUpdateComponent,
    AdvertOwnerComponent,
    UserUpdateComponent,
    AdvertOpenedComponent
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
