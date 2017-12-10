import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

//  Custom Module
import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { ClassListComponent } from './Module/class/list/list.component';
import { DetailComponent } from './module/class/detail/detail.component';
import { EditComponent } from './module/class/edit/edit.component';

//  Common shared component
import { TopNavComponent } from './shared/top-nav/top-nav.component';

//  service
import { SchoolService } from './service/school.service';

//  3rd Party Lib.
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const appRouter: Routes = [
  { path: '#', redirectTo: '/', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent }, 
  { path: 'class-list/:type', component: ClassListComponent , 
    children: [ 
      { path: 'detail/:studentName', component: DetailComponent },
      { path: 'edit/:studentName', component: EditComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    ClassListComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRouter, 
        { enableTracing: false}
    ),
    HttpModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
