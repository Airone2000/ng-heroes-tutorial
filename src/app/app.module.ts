import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { AppRouterModule } from './/app-router.module';
import { AppMessagerComponent } from './app-messager/app-messager.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesListComponent,
    HeroesDetailsComponent,
    AppMessagerComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
