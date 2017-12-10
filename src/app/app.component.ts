import { Component } from '@angular/core';
import { SchoolService } from './service/school.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private _schoolService: SchoolService)  {
      this._schoolService
        .getAllRecord()
          .subscribe(function(){}, function() {});
    }

  title = 'app';
}
