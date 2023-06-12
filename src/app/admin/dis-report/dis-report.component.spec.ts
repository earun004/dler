import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisReportComponent } from './dis-report.component';

describe('DisReportComponent', () => {
  let component: DisReportComponent;
  let fixture: ComponentFixture<DisReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
