import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { UsersComponent } from './pages/users/users.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserAddComponent } from './pages/users/user-add/user-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PlannerComponent } from './pages/planner/planner.component';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';
import {HttpClientModule} from "@angular/common/http";
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterComponent } from './pages/characters/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
    AboutComponent,
    UsersComponent,
    UserListComponent,
    UserAddComponent,
    PlannerComponent,
    UserEditComponent,
    CharactersComponent,
    CharacterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
