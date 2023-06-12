import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSteelMatrialCategoryComponent } from './add-steel-matrial-category.component';

describe('AddSteelMatrialCategoryComponent', () => {
  let component: AddSteelMatrialCategoryComponent;
  let fixture: ComponentFixture<AddSteelMatrialCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSteelMatrialCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSteelMatrialCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
