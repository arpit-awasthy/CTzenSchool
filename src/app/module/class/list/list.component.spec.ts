import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassOneComponent } from './class-one.component';

describe('ClassOneComponent', () => {
  let component: ClassOneComponent;
  let fixture: ComponentFixture<ClassOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
