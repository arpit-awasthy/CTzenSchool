import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../../../service/school.service';


let vm;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private observerRef: any;
  private selectedId: string;
  private type: string;
  private studentRecord: object;
  private isShowUpdateSuccessFully: boolean;
  private isShowErroMsg: boolean;


  constructor(private route: ActivatedRoute, private _schoolService: SchoolService, private _location: Location) {
    vm = this;
    
    this.observerRef = route.params.subscribe(params => {
      this.selectedId = params['studentName'];
      this.getDetail();
      vm.isShowUpdateSuccessFully = false;
      vm.isShowErroMsg = false;
    });
  }

  ngOnInit() {
  }

  getDetail()  {
    this.studentRecord = Object.assign({}, this._schoolService.getDetailBaseOnID(this.selectedId));
  }

  edit (studentForm) {
    if(!studentForm.valid)  {
      vm.isShowUpdateSuccessFully = false;
      vm.isShowErroMsg = true;
      return;
    }

    this._schoolService.updateDetailBaseOnID(this.selectedId, studentForm.value)
    vm.isShowUpdateSuccessFully = true;
    vm.isShowErroMsg = false;
    console.log(studentForm.value);
  }

  cancel() {
    this._location.back();
  }
}
