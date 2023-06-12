import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSteelSizeComponent } from './add-steel-size.component';

describe('AddSteelSizeComponent', () => {
  let component: AddSteelSizeComponent;
  let fixture: ComponentFixture<AddSteelSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSteelSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSteelSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
