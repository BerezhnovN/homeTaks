import { PageComponent } from './page/page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';

const bookRoutes: Routes = [
  {path: 'book', component: PageComponent, children: [
    { path: '1', component: FirstPageComponent },
    { path: '2', component: SecondPageComponent },
    { path: '3', component: ThirdPageComponent },
    { path: '4', component: FourthPageComponent },
    { path: '5', component: FifthPageComponent },
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}