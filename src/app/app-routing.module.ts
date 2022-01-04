import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {UsersComponent} from "./pages/users/users.component";
import {PlannerComponent} from "./pages/planner/planner.component";
import {CharactersComponent} from "./pages/characters/characters.component";
import {CharacterComponent} from "./pages/characters/character/character.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'planner',
    component: PlannerComponent,
  },
  {
    path: 'users/:param',
    component: UsersComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'characters/:id',
    component: CharacterComponent,
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
