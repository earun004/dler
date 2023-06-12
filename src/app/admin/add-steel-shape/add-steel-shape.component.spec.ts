import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSteelShapeComponent } from './add-steel-shape.component';

describe('AddSteelShapeComponent', () => {
  let component: AddSteelShapeComponent;
  let fixture: ComponentFixture<AddSteelShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSteelShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSteelShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
