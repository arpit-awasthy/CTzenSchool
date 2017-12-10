import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

let vm;

@Injectable()
export class SchoolService {

  private _type: string;

  constructor(private _http: Http) {
    vm = this;
  }

  private allRecord: Object;

  getAllRecord(): Observable<any[]>  {
    
    return this
            ._http
            .get('../../assets/Json/classes.json')
            .map(this.extractData)
            .catch(this.handleError);
  }

  getClassRecord(ClassType) {
    vm._type = ClassType;
    return vm.allRecord ? vm.allRecord[ClassType] : [];
  }

  getDetailBaseOnID(id) {
    return ((vm._type) && vm.allRecord) ? vm.allRecord[vm._type].find(x => x.Name == id) : {};
  }

  updateDetailBaseOnID(id, updateRecord)  {
    let studentData = this.getDetailBaseOnID(id);
    studentData.FullName = updateRecord.FullName;
    studentData.Gender = updateRecord.Gender;
    studentData.Address = updateRecord.Address;
  }

  private extractData(res: Response) {
    let body = res.json();
    vm.allRecord = body;
    return body[vm._type] || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
