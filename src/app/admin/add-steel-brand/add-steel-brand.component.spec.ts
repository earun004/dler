import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSteelBrandComponent } from './add-steel-brand.component';

describe('AddSteelBrandComponent', () => {
  let component: AddSteelBrandComponent;
  let fixture: ComponentFixture<AddSteelBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSteelBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSteelBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
