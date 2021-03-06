import { RegistrationComponent } from './sign-in/registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { bookRoutes } from './book/book-routing.module';
import { FormComponent } from './form/form.component';
import { AuthComponent } from './sign-in/auth/auth.component';

const routes: Routes = [
  { path:'', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'form', component: FormComponent },
  { path:'book', children:[...bookRoutes] },
  {path: 'registration', component: RegistrationComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
