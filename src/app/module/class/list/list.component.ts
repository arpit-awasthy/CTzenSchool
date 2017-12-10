import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from '../../../service/school.service';

let vm;

@Component({
  selector: 'class-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ClassListComponent implements OnInit {

  private classData;
  private observerRef: any;
  private type: string;
  private studentData: object;
  private studentClass: string;

  constructor(private route: ActivatedRoute, private _schoolService: SchoolService, private _router: Router) { 
    vm = this;
    this.observerRef = route.params.subscribe(params => {
      this.type = params['type'];
      this.studentClass = (this.type == 'ClassRoom1') ? 'Class 1' : 'Class 2';
      this.getLoadData();
    });
  }

  ngOnInit() {
    
  }

  getLoadData()  {
    if(this.type)  {
      vm.classData = [];
      vm.classData = this._schoolService.getClassRecord(this.type);
    }  else {
       this._router.navigate(['#']);
    }
    
  }

  setData(successResponse)  {
    vm.classData = [];
    vm.classData = successResponse;
  }

  setErrorMessage(errorResponce)  {
    console.log(errorResponce); 
  }

}
