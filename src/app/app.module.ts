import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { ClassOneComponent } from './Module/class-one/class-one.component';

const appRouter: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'class-one', component: ClassOneComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    ClassOneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRouter, 
        { enableTracing: false}
        )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
