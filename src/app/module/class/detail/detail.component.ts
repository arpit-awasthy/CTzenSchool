import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../../../service/school.service';

let vm;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private observerRef: any;
  private selectedId: string;
  private type: string;
  private studentData: object;

  constructor(private route: ActivatedRoute, private _schoolService: SchoolService) {
    vm = this;
    vm.studentDetail;
    this.observerRef = route.params.subscribe(params => {
      this.selectedId = params['studentName'];
      this.getDetail();
    });
  }

  ngOnInit() {
  }

  getDetail()  {
    this.studentData = this._schoolService.getDetailBaseOnID(this.selectedId);
  }
}
