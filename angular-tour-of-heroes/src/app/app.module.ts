import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FensecasePipe } from './fensecase.pipe';
import { RegistrationComponent } from './sign-in/registration/registration.component';
import { BookModule } from './book/book.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HelloDirective } from './directives/hello.directive';
import { TextModificatorDirective } from './directives/text-modificator.directive';
import { TextModificatorHostDirective } from './directives/text-modificator-host.directive';
import { RainbowTextAnimationDirective } from './directives/rainbow-text-animation.directive';
import { FormComponent } from './form/form.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    BookModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    FensecasePipe,
    RegistrationComponent,
    HelloDirective,
    TextModificatorDirective,
    TextModificatorHostDirective,
    RainbowTextAnimationDirective,
    FormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
